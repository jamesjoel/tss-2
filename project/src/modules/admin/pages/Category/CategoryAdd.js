import React, {useState} from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CategoryService from '../../../../services/CategoryService'
import { useNavigate } from 'react-router-dom'

const CateSchema = Yup.object({
    name : Yup.string().required("Insert Product Category")    
})


const CategoryAdd = () => {

    let navigate = useNavigate();
    let { handleSubmit, handleChange, errors, touched} = useFormik({
        initialValues : { name : ""},
        validationSchema : CateSchema,
        onSubmit : async (formdata)=>{
            let result = await CategoryService.Add(formdata);
            //console.log(result);
            navigate("/admin/category/list");
        }
    })


    
  return (
    <>
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4 className='text-center'>Add New Category</h4>
                <div className='form-group'>
                    <label>Category Name</label>
                    <input type='text' name='name' onChange={handleChange} className={'form-control ' + (errors.name && touched.name ? 'is-invalid' : '')} />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Add</button>
            </div>
        </div>
        </form>

    </div>
    
        
    </>


  )
}

export default CategoryAdd


/*
    let Box = ()=>{
        
    }




*/