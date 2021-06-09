import React, { useState } from "react";
 import { Carouseldata } from "./Carouseldata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import './Carousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ImageSearch } from "@material-ui/icons";

const CarouselContainer = () => {
    const [currImg, setCurrImg] = useState(0)


  return (
    <div className="carousel">
       <div className="carouselinner" style={{backgroundImage: `url(${Carouseldata[currImg].image})`}}>
           <div className="left" onClick= {() =>{
               currImg > 0 &&  setCurrImg(currImg - 1);
           }}>
               <ArrowBackIosIcon style ={{width: 30}}/>
           </div>
           <div className="center"></div>
           <div className="right" onClick= {() =>{
             currImg < Carouseldata.length-1 && setCurrImg(currImg + 1);
           }}>
               <ArrowForwardIosIcon style ={{width: 30}}/>
           </div>
       </div>
    </div>
    
  );
};

export default CarouselContainer;
