import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    let navigate = useNavigate();

    useEffect(()=>{
        if(! localStorage.getItem("token")){
            navigate("/login");
        }
    }, [])

  return (
    <>
    <div className="container" style={{minHeight : "700px"}}>
            <h4>My Profile</h4>
    </div>
    </>
  )
}

export default Profile