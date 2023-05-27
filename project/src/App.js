import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Headers from './components/Headers/Headers'
import Footer from './components/Footer/Footer'

const App = () => {

  
  return (
    <>
        <Headers />
            <div style={{minHeight : "700px"}}>
                <AllRoutes />
            </div>
        <Footer />
    </>
  )
}

export default App