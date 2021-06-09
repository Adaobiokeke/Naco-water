import React from 'react'
import Navbar from '../Navbar/Navbar'
const Container = ({children}) => {
    return (
        <div>
          <Navbar/>  
            {children}
        </div>
    )
}

export default Container
