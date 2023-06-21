import React from 'react'

const App2 = () => {
    let name = "Amar";
  return (
    <>
        <h1>This is App Component</h1>
        <CompA name={name}/>
    </>
  )
}

const CompA = (props)=>{
    return(
    <>
        <h1>Com A</h1>
        
        <CompB name={props.name} />
    </>
    )
}
const CompB = (props)=>{
    return(
        <>
            <h1>Com B</h1>
            
            <CompC name={props.name} />
        </>
    )
}
const CompC = (props)=>{
    return(
        <>
            <h1>Comp C</h1>
            <h3>{props.name}</h3>
        </>
    )
}



export default App2