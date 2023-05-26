import React, {useState} from 'react'

const Comp1 = () => {

    let [t, setT] = useState(0)
    let [l, setL] = useState(0)

    let [type, setType] = useState("password");
    let [label, setLabel] = useState("Show");


    let [a, setA] = useState(0)
    let [b, setB] = useState(0)
    let [disp, setDisp] = useState("none");

    let style = {
        backgroundColor : "#7040AC",
        height : "100px",
        width : "100px",
        borderRadius : "100px",
        marginTop : t+"px",
        marginLeft : l+"px"
    }


    let show = ()=>{
        if(label=="Show"){

            setType("text");
            setLabel("Hide");
        }else{
            setType("password");
            setLabel("Show");
        }
    }

    let demo = ()=>{

        var a = Math.random()*600;
        var b = Math.floor(a);
        setT(b);
        var x = Math.random()*800;
        var y = Math.floor(x);
        setL(y);
    }

    let demo2 = (e)=>{
        e.preventDefault();
        setDisp("block");
        setA(e.pageX);
        let x = e.pageY-50;
        setB(x);
        
    }

    let style2 = {
        backgroundColor : "red",
        width : "200px",
        height : "300px",
        marginLeft : a+"px",
        marginTop : b+"px",
        display : disp
    }
    
  return (
    <>
        {/* <div onMouseMove={demo} style={style}></div> */}

        <div className="container-fluid bg-info" onClick={()=>setDisp("none")} onContextMenu={(e)=>demo2(e)} style={{minHeight : "700px", paddingTop : "10px"}}>
            <div style={style2}></div>
            {/* <input type={type} />
            <button onClick={show}>{label}</button> */}
        </div>
    </>
  )
}

export default Comp1