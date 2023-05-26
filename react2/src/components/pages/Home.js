import React, {useState} from 'react'

const Home = () => {


  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  let demo = (event)=>{
    // console.log(event.pageX);
    // console.log(event.pageY);
    setX(event.pageX);
    setY(event.pageY);
  }

  return (
    <div onMouseMove={(e)=>demo(e)} className='container-fluid bg-info' style={{height : "700px"}}>
        <h3>X : {x}, Y : {y}</h3>
        
    </div>
  )
}

export default Home