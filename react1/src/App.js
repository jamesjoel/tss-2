import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom' 

const App = () => {
  return (
    <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/about'>About</NavLink>
        
        <hr />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
        </Routes>
    </>
  )
}

const Home = ()=>{
    return(
        <>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime officia laborum eos, id deleniti voluptatibus aliquam eum ipsam veritatis delectus voluptate excepturi quae voluptatum asperiores numquam quos saepe. Dolores.</p>
        </>
    )
}

const About = ()=>{
    return(
        <>
            <h1>About Page</h1>
        </>
    )
}

const Contact = ()=>{
    return(
        <>
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio a quisquam nesciunt vitae iste et architecto dolores earum est minima distinctio, mollitia laborum, consectetur blanditiis sunt placeat laudantium? Ea, tenetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut veritatis culpa aliquid recusandae maxime adipisci dolor natus officia autem repellat blanditiis ducimus inventore nemo, dolores rerum. Modi in molestiae nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet earum unde ab quo placeat perspiciatis excepturi repellendus ad vitae recusandae voluptatem. Voluptas culpa quaerat doloribus sint perferendis laudantium. Quisquam.</p>
        </>
    )
}




export default App


/*
    SPA ----  Single Page Application


*/