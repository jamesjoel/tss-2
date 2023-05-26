import React, {useState} from 'react'


const Contact = () => {
  let [a, setA] = useState(10);

  let demo = (x)=>{
    //setA(x);
    console.log(x);
  }
  return (
    <>
      <h1>{a}</h1>
      <div>Contact</div>
      {/* <button onClick={demo}>OK</button> */}
      <button onClick={(e)=>demo(e)}>OK</button>
      {/* demo(500) */}
    </>
  )
}

export default Contact