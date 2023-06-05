import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import {API} from '../../constents/ServerApi';

let signupSchema = Yup.object({
    name : Yup.string().required("Insert Your Full Name"),
    email : Yup.string().email("Email id not correct").required("Insert Your Email Id"),
    password : Yup.string().required("Insert Your Password"),
    repass : Yup.string().oneOf([Yup.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    address : Yup.string().required("Insert Your Address"),
    gender : Yup.string().required("Select Your Gender"),
    city : Yup.string().required("Select Your City"),
    contact : Yup.number().typeError("Insert Numbers only").required("Insert Your Contact")
});


const Signup = () => {

    let navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/profile")
        }
    }, [])
    let [city, setCity] = useState([]);

    useEffect(()=>{
        axios.get(`${API}/city`).then(result=>{
            setCity(result.data);
        })
    }, [])


    let { handleSubmit, handleChange, errors, touched } = useFormik({

        validationSchema : signupSchema,

        initialValues : { 
                        name : "", 
                        email : "", 
                        password : "", 
                        repass : "", 
                        address : "", 
                        gender : "", 
                        city : "", 
                        contact : "" 
                },
        onSubmit : (formdata)=>{
            axios.post(`${API}/user/signup`, formdata).then((result, err)=>{
                // console.log(result);
                navigate("/login");
            })
        }

    });
      

    // let signup = ()=>{
    
    // }

   
  return (
    <div className='container my-5' style={{minHeight : "700px"}}>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4 className='text-center'>User Registration</h4>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' name='name' onChange={handleChange} className={'form-control ' + (errors.name && touched.name ? 'is-invalid' : '')}/>
                    <small className='text-danger'>
                        { errors.name && touched.name ? errors.name : '' }
                    </small>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='text' name='email' onChange={handleChange} className={'form-control '+ (errors.email && touched.email ? 'is-invalid' : '')}/>
                    <small className='text-danger'>
                    { errors.email && touched.email ? errors.email : '' }
                    </small>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' name='password' onChange={handleChange} className={'form-control '+ (errors.password && touched.password ? 'is-invalid' : '')}/>
                    <small className='text-danger'>
                        { errors.password && touched.password ? errors.password : '' }
                    </small>
                </div>
                <div className='form-group'>
                    <label>Re-Password</label>
                    <input type='password' name='repass' onChange={handleChange} className={'form-control '+ (errors.repass && touched.repass ? 'is-invalid' : '')}/>
                    <small className='text-danger'>
                        { errors.repass && touched.repass ? errors.repass : '' }
                    </small>
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <textarea name='address' onChange={handleChange} className={'form-control '+ (errors.address && touched.address ? 'is-invalid' : '')}></textarea>
                    <small className='text-danger'>
                        { errors.address && touched.address ? errors.address : '' }
                    </small>
                </div>
                <div className='form-group'>
                    <label>Gender</label><br />
                    Male <input type='radio' value="male" name='gender' onChange={handleChange}/>
                    Female <input type='radio' value="female" name='gender' onChange={handleChange}/>
                    <br />
                    <small className='text-danger'>
                        { errors.gender && touched.gender ? errors.gender : '' }
                    </small>
                </div>
                <div className='form-group'>
                    <label>City</label>
                    <select name='city' onChange={handleChange} className={'form-control '+ (errors.city && touched.city ? 'is-invalid' : '')}>
                        <option>Select</option>
                        {
                            city.map(x=>{
                                return(
                                    <option key={x._id}>{x.name}</option>
                                )
                            })
                        }
                    </select>
                    <small className='text-danger'>
                        { errors.city && touched.city ? errors.city : '' }
                    </small>
                </div>
                <div className='form-group'>
                    <label>Contact</label>
                    <input type='text' name='contact' onChange={handleChange} className={'form-control '+ (errors.contact && touched.contact ? 'is-invalid' : '')}/>
                    <small className='text-danger'>
                        { errors.contact && touched.contact ? errors.contact : '' }
                    </small>
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Signup</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Signup

/*
    let demo = (a)=>{
        return a*a;
    }

    let demo = a = > a*a;


*/