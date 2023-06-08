import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {API} from '../../../../constents/ServerApi'

const Profile = () => {


    let navigate = useNavigate();
    let [user, setUser] = useState();

    useEffect(()=>{
        if(! localStorage.getItem("token")){
            navigate("/login");
        }else{
          let token = localStorage.getItem("token");
          axios.get(`${API}/user/profile/${token}`).then(result=>{
            // console.log(result.data);
            setUser(result.data);
          })

        }

    }, [])

  return (
    <>
    <div className="container" style={{minHeight : "700px"}}>
            <h4>My Profile</h4>
            {
              user ? 
                (
                  <>
                    <h3>Full Name : {user.name}</h3>
                  </>
                )
               : ''
            }
    </div>
    </>
  )
}

export default Profile