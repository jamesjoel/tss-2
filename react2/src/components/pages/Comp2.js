import React from 'react'

const Comp2 = () => {
 
 
  let demo = (event)=>{
    if(event.which==65){
      event.preventDefault();
    }
  }
  let demo2 = ()=>{
    console.log("$$$$$$$$$$$$$");
  }
  return (
    <>
      <div className="container">
        <input type='text' onKeyDown={(e)=>demo(e)} onKeyUp={demo2}/>
      </div>
    </>
  )
}

export default Comp2