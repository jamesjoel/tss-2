import React, {useState, useEffect} from 'react'
import CategoryService from '../../../../services/CategoryService'
import Delete from '../../components/Delete/Delete';

const SubCategoryList = () => {
    let counter = 0;
    let [allCate, setAllCate] = useState([]);
    let [subCate, setSubCate] = useState([]);
    let [cate, setCate] = useState();
    let [selectedCate, setSelectedCate] = useState();
    
  useEffect(()=>{
    let getAllCategory = async () =>{
      let result = await CategoryService.GetAll();
      setAllCate(result.info);
      
    }
    getAllCategory();
    
  }, [])

  let getSubCate = async (e)=>{
    // console.log(e.target[e.target.selectedIndex].text);
      let a = e.target.value;
      
    setSelectedCate(a);
    let result = await CategoryService.getSubCate(a);
   
    setSubCate(result.info[0].subcategory);
  }

  let askDelete = (obj)=>{
    setCate(obj);
  }
  let confDelete = async ()=>{
    console.log(cate)
    console.log(selectedCate)
    // return;
    let result = await CategoryService.deleteSubCate(cate, selectedCate);
    setSubCate((values)=>{
        return values.filter(x=>x._id != cate._id);
    })
  }

  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <select onChange={(e)=>getSubCate(e)} className='form-control my-3'>
                    <option>Select</option>
                    {
                        allCate.map(cate=><option value={cate._id} key={cate._id}>{cate.name}</option>)
                    }
                </select>
                {
                   subCate.length == 0 ? <div className='alert alert-info'>Please Select Category Firset</div>  :
                
                (<table className="table table-dark table-hover table-striped">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            
                            <th>Sub-Category</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            subCate.map((cate, index1)=>{

                                
                                return(
                                    <tr key={cate._id}>
                                        <td>{index1+1}</td>
                                        
                                        <td>{cate.name}</td>
                                        <td><button onClick={()=>askDelete(cate)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                                    </tr>
                                )
                            })
                        
                        }
                    </tbody>
                </table>)
                }
            </div>
        </div>
    </div>
    <Delete info={cate} confDelete={confDelete}/>
    </>
  )
}

export default SubCategoryList