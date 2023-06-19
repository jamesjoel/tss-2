import React, {useState, useEffect} from 'react'
import TopBar from '../../components/TopBar/TopBar'
import ProductBox from '../../components/ProductBox/ProductBox'
import ProductService from '../../../../services/ProductService'

const Home = () => {

    let [productArr, setProductArr] = useState([]);
    useEffect(()=>{
        let getPro = async ()=>{
            let result = await ProductService.GetAll();
            setProductArr(result.info);
        }
        getPro();
    }, [])


  return (
    <>
        <TopBar />
        <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter">
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