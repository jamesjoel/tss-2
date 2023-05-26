import React, {useState} from 'react'

/*

  let [a, b] = [10, 20, 50, 100]


*/


const About = () => {
  
        let [a, b]= useState(500) // a = 100
        let [name, setName] = useState("rohit");

        // state

  let demo = ()=>{
      b(700);
      setName("Amar");
  }

  return (
    <>
    <br />
    <br />
    <h1>{name}</h1>
      <button onClick={demo}>OK</button>
    </>
  )
}

export default About