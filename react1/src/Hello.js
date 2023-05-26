import './Hello.css';
let Hello = ()=>{
    let css = { backgroundColor : "red", fontSize : "20px", color : "#fff" };
    let name = "Rohit Sharma";
    let city = "Mumbai";


    
    return(
        <>
        <h1>{city}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe ipsum ab accusamus eveniet unde autem. Rem error ad natus, incidunt magnam obcaecati dignissimos doloremque deleniti nisi, laborum eum deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga est placeat, voluptas quasi tempora sunt autem facilis similique voluptates tempore sequi porro debitis obcaecati vel, laborum unde quaerat veritatis?</p>
        <h4 style={css}>{name}</h4>
        </>
    )
}

export default Hello;