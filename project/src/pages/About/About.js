import React from 'react'

const About = () => {

  let name = "Rohit";
  let city = "indore";
  let user = { name : "amar", age : 25, gender : "male"};

  return (
    <div className="container my-5">
        <h4>About Page</h4>
        <Demo abc={name} xyz={city} user={user}/>
    </div>
  )
}


const Demo = ({abc: x, xyz, user})=>{
  return(
    <>
    <h1>{x}</h1>
      {/* <h1>{x.abc}</h1>
      <h1>{x.xyz}</h1>
      <h1>{ x.user.name }</h1> */}

    </>
  )
}

export default About

/*
  let arr = [4, 5, 7, 15, 20, 8, 9];

  let [a, b, c, d] = arr;

  let obj = { name : "rohit", age : 25, city :"indore"};

  let { name, age } = obj;

  let { name : a, age : b} = obj;

  






*/