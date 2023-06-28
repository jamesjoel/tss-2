import React, {useState, useEffect} from 'react'
import TopBar from '../../components/TopBar/TopBar'
import ProductBox from '../../components/ProductBox/ProductBox'
import ProductService from '../../../../services/ProductService'
import { useParams } from 'react-router-dom'

const Home = () => {
    let param = useParams();
    // console.log(param);

    let [productArr, setProductArr] = useState([]);
    useEffect(()=>{
        let getPro = async ()=>{
            if(param.subcate){
                let result = await ProductService.GetAllBySubCategory(param.name, param.subcate);
                setProductArr(result.info);
            }else if(param.name){
                let result = await ProductService.GetAllByCategory(param.name);
                setProductArr(result.info);

            }
            else{
                let result = await ProductService.GetAll();
                setProductArr(result.info);
            }
        }
        getPro();
    }, [param])


  return (
    <>
        {/* <TopBar /> */}
        <section className="featured spad">
        <div className="container">
           
            <div className="row">
               {
                productArr.map(x=><ProductBox key={x._id} data={x}/>)
                
               }
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Home