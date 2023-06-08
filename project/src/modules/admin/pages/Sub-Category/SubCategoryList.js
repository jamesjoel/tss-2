import React, {useState, useEffect} from 'react'
import CategoryService from '../../../../services/CategoryService'

const SubCategoryList = () => {
    let counter = 0;
    let [allCate, setAllCate] = useState([]);
  useEffect(()=>{
    let getAllCategory = async () =>{
      let result = await CategoryService.GetAll();
      setAllCate(result.info);
      
    }
    getAllCategory();
    
  }, [])
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark table-hover table-striped">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category</th>
                            <th>Sub-Category</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            allCate.map((cate, index1)=>{

                                return cate.subcategory.map((subcate, index2)=>{

                                    counter++;
                                
                                return(
                                    <tr key={subcate._id}>
                                        <td>{counter}</td>
                                        <td>{cate.name}</td>
                                        <td>{subcate.name}</td>
                                    </tr>
                                )
                            })
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default SubCategoryList