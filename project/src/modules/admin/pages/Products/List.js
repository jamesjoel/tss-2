import React, { useState, useRef } from 'react'

const List = () => {

  let a = useRef();
  
  let demo = ()=>{
    console.log(a.current.innerHTML);
  }
  return (
    <>
      <h2 ref={a}>Welcome</h2>
      <button onClick={demo}>OK</button>
    </>
  )
}

export default List