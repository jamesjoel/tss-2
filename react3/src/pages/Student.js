import React, {useState, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { delStu, addStu } from '../redux/StudentSlice'



const Student = () => {
    let [stu, setStu] = useState({ name : "", age : ""})

    let disp = useDispatch();
   let allStu = useSelector(state=>state);
   
    let remove = (obj)=>{
        disp(delStu(obj));
    }

    let add = ()=>{
        disp(addStu(stu));
    }
  return (
    <>
    <div className="container">
        


        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <input type='text' onChange={(e)=>setStu({...stu, name : e.target.value})} className='form-control' placeholder='Name'/>
                <input type='text' onChange={(e)=>setStu({...stu, age : e.target.value})} className='form-control' placeholder='Age'/>
                <button className='btn btn-primary' onClick={add}>Add</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            allStu.map((s, n)=>{
                                return(
                                    <tr key={n}>
                                        <td>{n+1}</td>
                                        <td>{s.name}</td>
                                        <td>{s.age}</td>
                                        <td><button onClick={()=>remove(s)} className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Student