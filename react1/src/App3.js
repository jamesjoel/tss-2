import React, { useContext, createContext } from 'react'

let Data = createContext();

const App3 = () => {
    let name = "amar joshi";
    let demo = ()=>{
        console.log("**********");
    }

    let arr = [name, demo];
  return (
    <>
        <Data.Provider value={arr}>
            <h1>This is App</h1>
            <CompA />
        </Data.Provider>

    </>
  )
}

const CompA = ()=>{

    return(
        <>
        
            <h1>Comp A</h1>
            <CompB />
        </>
    )
}
const CompB = ()=>{

    let z = useContext(Data);
    console.log(z);
    return(
        <>
            <h1>Comp B</h1>
            <button onClick={z[1]}>OK</button>
            <CompC />
        </>
    )
}
const CompC = ()=>{
    let a = useContext(Data);
    return(
        <h1>Comp C {a}</h1>
    )
}


export default App3