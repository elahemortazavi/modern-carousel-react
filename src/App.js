import React, { useState } from "react";
import './App.css';
const App = () => {
  const content = [
    {
      title: "Aliqua pariatur",
      description: "Occaecat cupidated id",
      img: "m1.jpg",
    },
    {
      title: "Comodo pariatur",
      description: "Occaecat cupidated id",
      img: "m2.jpg",
    },
    {
      title: "Enim pariatur",
      description: "Occaecat cupidated id",
      img: "m3.jpg",
    },
  ];




  return (
    <div className="App">
      <Carousel content = {content} />
    </div>
  );
  };

  
export default App;
