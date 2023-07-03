import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoggedMenu from '../LoggedMenu/LoggedMenu';
import UnLoggedMenu from '../UnLoggedMenu/UnLoggedMenu';

import { useSelector, useDispatch } from 'react-redux'
import { loggedIn } from '../../../../redux/UserAuthSlice'
import CategoryService from '../../../../services/CategoryService'




const Headers = () => {
   
    let [allCate, setAllCate] = useState([]);
    let disp = useDispatch();
    let cart = useSelector(state=>state.CartSlice);
    

    useEffect(()=>{
        if(localStorage.getItem("token")){

            disp(loggedIn());
            // setIsLoggedIn(true);
        }
        let getAllCategory = async () =>{
            let result = await CategoryService.GetAll();
            setAllCate(result.info);
          }
          getAllCategory();
    }, [])

    let isLoggedIn = useSelector(state=>state.UserAuthSlice);

  return (
    <>
    <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <a href="#"><img src="/assets/img/logo.png" alt="" /></a>
        </div>
        <div className="humberger__menu__cart">
            <ul>
                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div className="humberger__menu__widget">
            <div className="header__top__right__language">
                <img src="/assets/img/language.png" alt="" />
                <div>English</div>
                <span className="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
            <div className="header__top__right__auth">
                <a href="#"><i className="fa fa-user"></i> Login</a>
            </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
            <ul>
                <li className="active"><a href="./index.html">Home</a></li>
                <li><a href="./shop-grid.html">Shop</a></li>
                <li><a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                        <li><a href="./shop-details.html">Shop Details</a></li>
                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="./checkout.html">Check Out</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-pinterest-p"></i></a>
        </div>
        <div className="humberger__menu__contact">
            <ul>
                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
    </div>
    
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            
                            {
                                isLoggedIn ? <LoggedMenu /> : <UnLoggedMenu />
                            }                           



                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="/assets/img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            {/* <li><a href="./shop-grid.html">Shop</a></li> */}
                            {/* <li><a href="#">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li> */}



                            <li><a href="#">Categories</a>
                                <ul className="header__menu__dropdown">
                                {
                                    allCate.map(cate=>{
                                        return(
                                                <>
                                                    <li><NavLink to={`/category/${cate.name}`}>{cate.name}</NavLink>
                                                        <ul className='header__menu__dropdown__inner'>
                                                            {cate.subcategory.map(subcate=>{
                                                                return(
                                                                    <li><NavLink to={`/category/${cate.name}/${subcate.name}`}>{subcate.name}</NavLink></li>
                                                                )
                                                                })
                                                            }
                                                        </ul>
                                                    </li>
                                                </>
                                                )
                                            })
                                        }
                                </ul>
                                {/* <ul className="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a>
                                    <ul className='header__menu__dropdown__inner'>
                                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                        <li><a href="./checkout.html">Check Out</a></li>
                                    </ul>
                                    </li>
                                    
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul> */}
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            
                            <li><NavLink to="/mycart"><i className="fa fa-shopping-bag"></i> <span>{cart.length}</span></NavLink></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    </>
  )
}

export default Headers


/*

    ["red", "green", "red"]

    red ---- 3
    green ---2 
    yellow - 1
    black - 1

*/

