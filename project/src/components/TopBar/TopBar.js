import React from 'react'
import Sidenav from '../Sidenav/Sidenav'
import Banner from '../Banner/Banner'

const TopBar = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="row">
                <Sidenav /> 
                <Banner />
            </div>
        </div>
    </section>
    </>
  )
}

export default TopBar