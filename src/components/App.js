import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [slides, setSlides] = useState(props.slides);
  const [currindex, setCurrIndex] = useState(0);
  // const [next, setNext] = useState(false);
  // const [prev, setPrev] = useState(true);

  const prevSlide = (event) => {
    console.log(currindex, event.target.dataset);
    if (currindex > 0) {
      event.target.disabled = false;
      setCurrIndex((prev) => prev - 1);
    }
  };
  const nextSlide = (event) => {
    console.log(currindex);
    if (currindex < slides.length - 1) {
      setCurrIndex((prev) => prev + 1);
    }
  };

  const restartSlide = (event) => {
    setCurrIndex(0);
  };

  return (
    <>
      <div id="slide">
        <h1 data-testid="title">{slides[currindex].title}</h1>
        <p data-testid="text">{slides[currindex].text}</p>
      </div>
      <button data-testid="button-prev" onClick={prevSlide}>
        Prev
      </button>
      <button data-testid="button-next" onClick={nextSlide}>
        Next
      </button>
      <button data-testid="button-restart" onClick={restartSlide}>
        Restart
      </button>
    </>
  );
};

export default App;
