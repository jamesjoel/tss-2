import React from 'react';
import { useSelector } from 'react-redux'

const LeftBox = () => {
    let arr = useSelector(x=>x);
  return (
    <>
        <div style={{ backgroundColor : "yellow", float : "left", height : "500px", width : "200px"}}>
            Total : {arr.length}
        </div>
    </>
  )
}

export default LeftBox