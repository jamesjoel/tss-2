import React from 'react'
// { data : }
const ProductBox = ({ data }) => {
  return (
    <>
        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="/assets/img/featured/feature-2.jpg" style={{backgroundImage : `url(http://localhost:3001/upload/${data.image})`}}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6 className='font-weight-bold'><a href="#">{data.title}</a></h6>
                            <h6><del>${data.price.toFixed(2)}</del></h6>
                            <h5>${(data.price - (data.price*data.discount/100)).toFixed(2)}</h5>
                            
                        </div>
                    </div>
                </div>
    </>
  )
}

export default ProductBox