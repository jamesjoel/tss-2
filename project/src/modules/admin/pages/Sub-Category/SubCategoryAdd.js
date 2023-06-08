import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CategoryService from '../../../../services/CategoryService'
import { useNavigate } from 'react-router-dom'

const SubCateSchema = Yup.object({
    category : Yup.string().required("Select Category"),
    name : Yup.string().required("Insert Sub-Category")    
})

const SubCategoryAdd = () => {
    let [allCate, setAllCate] = useState([]);
    useEffect(()=>{
        let getAllCategory = async () =>{
        let result = await CategoryService.GetAll();
        setAllCate(result.info);
        }
        getAllCategory();
        
    }, [])

    let navigate = useNavigate();
    let { handleSubmit, handleChange, errors, touched} = useFormik({
        initialValues : { category :  "", name : ""},
        validationSchema : SubCateSchema,
        onSubmit : async (formdata)=>{
            let result = await CategoryService.AddSubCate(formdata)
            //console.log(result);
            navigate("/admin/subcategory/list");
        }
    })


  return (
    <>
        <>
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4 className='text-center'>Add New Sub-Category</h4>
                <div className='form-group'>
                    <label>Select Category</label>
                    <select className='form-control' name='category' onChange={handleChange}>
                        <option>Select</option>
                        {
                            allCate.map(cate=><option>{cate.name}</option>)
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <label>Sub-Category Name</label>
                    <input type='text' name='name' onChange={handleChange} className={'form-control ' + (errors.name && touched.name ? 'is-invalid' : '')} />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Add</button>
            </div>
        </div>
        </form>

    </div>
    
        
    </>
    </>
  )
}

export default SubCategoryAdd