import React, {useState} from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import CategoryService from '../../../../services/CategoryService'
import { useNavigate, useParams } from 'react-router-dom'

const CateSchema = Yup.object({
    name : Yup.string().required("Insert Product Category")    
})


const CategoryAdd = () => {

    let navigate = useNavigate();
    let param = useParams();
    
    let [data, setData] = useState({
        name : null
    })

    if(param.id){
        let getCate = async (cateid)=>{
            let result = await CategoryService.getSubCate(cateid);
            setData(result.info[0]);
            
        }
        getCate(param.id);
    }
    
    
/*

    axios.get().then((result)=>{

    })
*/

    let { handleSubmit, handleChange, errors, touched, values} = useFormik({
        initialValues : { name :  data.name ? data.name : '' },
        enableReinitialize : true,
        validationSchema : CateSchema,
        onSubmit : async (formdata)=>{
            if(param.id){
                let result = await CategoryService.Update(param.id, formdata);
            }else{
                let result = await CategoryService.Add(formdata);
            }
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
                <h4 className='text-center'>{param.id ? 'Update' : 'Add New'} Category</h4>
                <div className='form-group'>
                    <label>Category Name</label>
                    <input value={values.name} type='text' name='name' onChange={handleChange} className={'form-control ' + (errors.name && touched.name ? 'is-invalid' : '')} />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>{ param.id ? 'Update' : 'Add' }</button>
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