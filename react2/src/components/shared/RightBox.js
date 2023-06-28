import React from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../../redux/DemoSlice'

const RightBox = () => {
    let disp = useDispatch();


    let demo = ()=>{
        disp(add("james"));
    }


  return (
    <>
    <div style={{ backgroundColor : "#898989", float : "left", height : "400px", width : "400px"}}>
        <br />
        <br />
        <button onClick={demo}>OK</button>
        <br />
        <br />
        <button onClick={()=>disp(remove())}>Del</button>
    </div>
    </>
  )
}

export default RightBox