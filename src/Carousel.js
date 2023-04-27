import React, { useState } from "react";
const [currentContentIndex, setCurrentIndex] = useState(0);
const [transition, setTransition] = useState(false);

const nextImage = () => {
    setTransition(true);
    setTimeout(() => {
        setCurrentContentIndex((currentContentIndex + 1) % content.length);
        setTransition(false)
    }, 500);
};
const prevImage = () => {
    setTransition(true);
    setTimeout(() => {
        setCurrentContentIndex (
        setCurrentContentIndex === 0 ? content.length - 1 : currentContentIndex - 1);
        setTransition(false);
    }, 500);
}
 return (
   <div className="carousel">
     <div className={`content-card ${transition ? "transition" : ""}`}>
       <img src={content[currentContentIndex].img} alt="carousel" />
       <div className="content">
         <h1>{content[currentContentIndex].title}</h1>
         <p>{content[currentContentIndex].description}</p>
       </div>
     </div>
     <div className="btn-container">
       <button onClick={prevImage}>Previous</button>
       <button onClick={nextImage}>Next</button>
     </div>
   </div>
 );
