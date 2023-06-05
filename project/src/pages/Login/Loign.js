import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {API} from '../../constents/ServerApi';

let loginSchema = Yup.object({
    email : Yup.string().email("Email id is Incorrect").required("Insert Your Email id"),
    password : Yup.string().required("Insert Your Password")
})

const Loign = () => {

    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/profile")
        }
    }, [])


    let [err, setErr] = useState(false);
    let [msg, setMsg] = useState("");
   
    let {handleSubmit, handleChange, errors, touched} = useFormik({
        validationSchema : loginSchema,
        initialValues : { email : "", password : ""},
        onSubmit : (formdata)=>{
            axios.post(`${API}/user/auth`, formdata).then(result=>{
                
                if(result.data.success){
                    let token = result.data.token;
                    localStorage.setItem("token", token);
                    navigate("/");
                    
                }else{
                    if(result.data.errType == 1){
                        setErr(true);
                        setMsg("This Email id is not registred or Invalid Email Id")
                    }
                    if(result.data.errType == 2){
                        setErr(true);
                        setMsg("This Password is invalid")
                    }
                }
            })
        }
    })
  return (
    <>
    <div className="container my-5">
        <form onSubmit={handleSubmit} >
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4 className='text-center'>Login</h4>
                    <div className='form-group'>
                        <label>Username/Email</label>
                        <input type='text' name='email' onChange={handleChange} className='form-control' />
                        <small className='text-danger'>
                            {
                                errors.email && touched.email ? errors.email : ''
                            }
                        </small>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' name='password' onChange={handleChange} className='form-control' />
                        <small className='text-danger'>
                            {
                                errors.password && touched.password ? errors.password : ''
                            }
                        </small>
                    </div>
                
                <br/>
                <button type='submit' className='btn btn-primary'>Login</button>
                {
                    err ? (
                    <div className='alert mt-3 alert-danger'>
                        {msg}
                    </div>
                    ) : ''
                }
                
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Loign

/*
    let x = "hello";

    let a = x+"amar";
    let a = x+'amar';

    let para = "sdfg sdfg sdfg sdfgdfsg sdfg sdg
        sdfg sdfg sdfgsdg
    "
    
    let a = `${x}amar`;


*/