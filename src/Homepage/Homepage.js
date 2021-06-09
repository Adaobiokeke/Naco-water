import React from 'react'
import Container from '../Components/Container';
import './Homepage.css';
import Grid from '@material-ui/core/Grid';
import Water from '../Assets/water2.jpg';
import Carousel from '../Carousel/Carousel'

const Homepage = () => {
    return (
        <Container>
         <div className='imgdiv'> 
             {/* <img src={Water} alt='money' className='img'/> */}
             <Carousel/>
             <p className='caption'><q><em>...In time and with water, everything changes!</em></q></p>
         </div>
        </Container>
    )
}

export default Homepage
