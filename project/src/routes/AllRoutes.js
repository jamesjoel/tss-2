import React, {useEffect, useState} from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'


import Header from '../modules/user/components/Headers/Headers'
import Footer from '../modules/user/components/Footer/Footer'

import AdminHeader from '../modules/admin/components/Header/Header'
import AdminFooter from '../modules/admin/components/Footer/Footer'
import Dashboard from '../modules/admin/pages/Dashboard/Dashboard'


import Home from '../modules/user/pages/Home/Home'
import About from '../modules/user/pages/About/About'
import Signup from '../modules/user/pages/Signup/Signup'
import Loign from '../modules/user/pages/Login/Loign'
import Profile from '../modules/user/pages/Profile/Profile'
import Logout from '../modules/user/pages/Logout/Logout';
import CategoryList from '../modules/admin/pages/Category/CategoryList'
import CategoryAdd from '../modules/admin/pages/Category/CategoryAdd'
import SubCategoryList from '../modules/admin/pages/Sub-Category/SubCategoryList'
import SubCategoryAdd from '../modules/admin/pages/Sub-Category/SubCategoryAdd'
import ProductAdd from '../modules/admin/pages/Products/Add'
import ProductList from '../modules/admin/pages/Products/List'

const AllRoutes = () => {

  let [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(()=>{

    if(localStorage.getItem("token")){
      console.log("YES");
      setIsLoggedIn(true)
    }
    else{
      
      console.log("NO");
      setIsLoggedIn(false);
    }
  }, [])

  return (
    <>
        <Routes>
            <Route element={<UserLayout />}>
              <Route path='' element={<Home />} />
              <Route path='signup' element={<Signup />} />
              <Route path='login' element={<Loign />} />
              <Route path='about' element={<About />} />
              <Route path='profile' element={<Profile />} />
              <Route path='logout' element={<Logout />} />
              <Route path='category/:name' element={<Home />} />
              <Route path='category/:name/:subcate' element={<Home />} />
            </Route>

            {/* 
                localhost:3001/admin
            
            */}
            <Route path='admin' element={<AdminLayout />}>
                <Route path='' element={<Dashboard />} />
                <Route path='product/list' element={<ProductList />} />
                <Route path='product/add' element={<ProductAdd />} />
                <Route path='category/list' element={<CategoryList />} />
                <Route path='category/add' element={<CategoryAdd />} />
                <Route path='category/edit/:id' element={<CategoryAdd />} />
                <Route path='subcategory/list' element={<SubCategoryList />} />
                <Route path='subcategory/add' element={<SubCategoryAdd />} />
            </Route>
        </Routes>
    </>
  )
}

let UserLayout = ()=>{
  return(
    <>
        <Header />
        <div style={{minHeight : "700px"}}>
                <Outlet />
        </div>
        <Footer />
    </>
  )
}


let AdminLayout = ()=>{
  return(
    <>  
        <AdminHeader />
        <div style={{minHeight : "700px"}}>
            <Outlet />
        </div>
        <AdminFooter />
    </>
  )
}


export default AllRoutes



/*
Parametrized URL --- /about/rohit/25


----- /about/info/more

Route

to="about/:a/:b"

*/