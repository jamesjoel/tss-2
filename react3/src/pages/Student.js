import React, {useState, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { delStu, addStu, editStu } from '../redux/StudentSlice'



const Student = () => {
    let [stu, setStu] = useState({ name : "", age : ""})

    let disp = useDispatch();
   let allStu = useSelector(state=>state);
   
    let remove = (obj)=>{
        disp(delStu(obj));
    }

    let add = ()=>{
        if(stu.id){
            disp(editStu(stu));
        }else{

            disp(addStu(stu));
        }
        setStu({...stu, name : "", age : "", id : ""});
        // console.log(stu);
    }
    let edit = (obj)=>{
        setStu(obj);
    }
  return (
    <>
    <div className="container">
        


        <div className='row'>
            <div className='col-md-6 offset-md-3 my-3'>
                <input type='text' value={stu.name ? stu.name : ""} onChange={(e)=>setStu({...stu, name : e.target.value})} className='form-control' placeholder='Name'/>
                <br />
                <input type='text' value={stu.age ? stu.age : ""} onChange={(e)=>setStu({...stu, age : e.target.value})} className='form-control' placeholder='Age'/>
                <br />
                <button className='btn btn-primary m-2' onClick={add}>{stu.id ? 'Update' : 'Add' }</button>
                {
                    stu.id ? <button className='btn btn-danger m-2' onClick={()=>setStu({...stu, name : "", age : "", id : ""})}>Cancle</button> : ''
                }
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
                            <th>Edit</th>
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
                                        <td><button onClick={()=>edit(s)} className='btn btn-info'>Edit</button></td>
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