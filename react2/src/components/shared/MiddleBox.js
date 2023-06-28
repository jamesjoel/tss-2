import React from 'react'
import { useSelector } from 'react-redux'

const MiddleBox = () => {
    let arr = useSelector(x=>x);
  return (
    <>
        <div style={{ backgroundColor : "#CDCDCD", float : "left", height : "400px", width : "400px"}}>
            {
                arr.map(name=>{
                    return(<h3>{name}</h3>)
                })
            }
        </div>
    </>
  )
}

export default MiddleBox