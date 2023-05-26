import React from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import AllRutes from './AllRutes'



const App = () => {
  return (
    <>
      <Header />
      <div style={{minHeight : "700px"}}>
          <AllRutes />
      </div>
      <Footer />
    </>
  )
}

export default App