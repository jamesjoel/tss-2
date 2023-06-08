import React, {useState, useEffect} from 'react'
import CategoryService from '../../../../services/CategoryService'

const CategoryList = () => {
  let [allCate, setAllCate] = useState([]);
  useEffect(()=>{
    let getAllCategory = async () =>{
      let result = await CategoryService.GetAll();
      setAllCate(result.info);
    }
    getAllCategory();
    
  }, [])

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {
              allCate.length ? (
            
            <table className='table table-hover table-dark table-striped'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Category Name</th>
                </tr>
              </thead>
              <tbody>
                  {
                    allCate.map((cate, index)=>{
                      return(
                        <tr>
                          <td>{index+1}</td>
                          <td>{cate.name}</td>
                        </tr>
                      )

                    })
                  }
              </tbody>
            </table>) : <div className='alert alert-info'>No Data Found</div>
          }
          </div>
        </div>

    </div>
    </>
  )
}

export default CategoryList