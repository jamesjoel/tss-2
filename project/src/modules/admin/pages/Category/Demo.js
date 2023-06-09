import React, {useState} from 'react'

const Demo = () => {
    const [a, hello ] = useState(1);  // ["rohit", fn]


    let test = ()=>{
    //    hello(2);
       // let x = a;
        //x++;
        //hello(x);
        // hello((val)=>{
        //     return val+1;
        // })
    }

  return (
    <>
        <div>Demo</div>
        <h1>{a}</h1>
        <button onClick={test}></button>
    </>
  )
}





export default Demo