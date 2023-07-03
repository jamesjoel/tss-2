import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove, removeall } from '../../../../redux/CartSlice'

const MyCart = () => {
    let disp = useDispatch();
    let allItem = useSelector(state=>state.CartSlice);
    let totalPrice = 0;
    let totalDiscount = 0;
    let discountPrice = 0;
  return (
    <>
        <div className='container my-5'>
            <button className='btn btn-dark' onClick={()=>disp(removeall())}>Clear Cart</button>
            <div className="row">
                <div className="col-md-8">
                    {
                        allItem.map(item=>{
                            totalPrice += item.price;
                            let discount = item.price*item.discount/100;
                            discountPrice += (item.price-discount);
                            totalDiscount +=discount;

                            return(
                                <div className="row border-bottom my-3" style={{minHeight : "150px"}}>
                                <div className="col-md-3">
                                    <img src={`http://localhost:3001/upload/${item.image}`} className='img-thumbnail' style={{height : "150px", width : "100%"}}/>
                                </div>
                                <div className="col-md-9">
                                    <h5>{item.title}</h5>
                                    <p>Price : {item.price.toFixed(2)}</p>
                                    <button onClick={()=>disp(remove(item))} className='btn btn-danger btn-sm'>Remove</button>
                                </div>
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
                <div className="col-md-4">
                    <h3 className='border-bottom pb-4 mb-3'>Price Detail</h3>
                    <div className='row'>
                        <div className='col-md-12 my-2'>
                        <h5 className='float-left'>Price ({allItem.length} Items)</h5>
                        <h5 className='float-right'>{totalPrice.toFixed(2)}</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 my-2'>
                        <h5 className='float-left  text-info'>Total Discount</h5>
                        <h5 className='float-right  text-info'>-{totalDiscount.toFixed(2)}</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 my-2'>
                        <h5 className='float-left'>Delivery Fee</h5>
                        <h5 className='float-right'>Free</h5>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-md-12 my-2'>
                        <h5 className='float-left font-weight-bold'>Total Amount</h5>
                        <h5 className='float-right font-weight-bold'>{discountPrice.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyCart