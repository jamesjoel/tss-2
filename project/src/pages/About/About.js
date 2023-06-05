import React, {useState, useEffect} from 'react'
import {API} from '../../constents/ServerApi'
import axios from 'axios'

const About = () => {

  let [state, setState] = useState([]);
  let [city, setCity] = useState([]);
  

  useEffect(()=>{
    axios.get(`${API}/city/state`).then(result=>{
      setState(result.data);
    })
  }, [])

  let getCity = (e)=>{
    let x = e.target.value;
    axios.get(`${API}/city/getcity/${x}`).then(result=>{
      // console.log(result.data);
      setCity(result.data);
    })
    
  }

  return (
    <div className="container my-5">
        <h4>About Page</h4>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className='form-group'>
              <label>State</label>
              <select className='form-control' onChange={(e)=>getCity(e)}>
                <option>Select</option>
                {
                  state.map((x, n)=><option key={n}>{x}</option>)
                }
              </select>
            </div>
            <br />
            <br />
            <div className='form-group'>
              <label>City</label>
              <select className='form-control'>
                <option>Select</option>
                {
                  city.map((x, n)=><option key={n}>{x.name}</option>)
                }
              </select>
            </div>
          </div>
        </div>        
    </div>
  )
}


export default About


/*
  JSX -- {
      HTML comment, className, HtmlFor, Capital
      if..else ---- Ternarry
      loop --- .map()  --- listing in JSX
  }



*/
