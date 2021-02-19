import React, { Component, useState, useRef, useEffect } from "react";
import "../styles/App.css";

const App = (props) => {
  const [slides, setSlides] = useState(props.slides);
  const [currindex, setCurrIndex] = useState(0);
  const prevRef = useRef(null);
  const restartRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    prevRef.current.disabled = true;
    restartRef.current.disabled = true;
  }, []);

  useEffect(() => {
    console.log(currindex);
    if (currindex > 0 && currindex < slides.length - 1) {
      prevRef.current.disabled = false;
      nextRef.current.disabled = false;
      restartRef.current.disabled = false;
    } else if (currindex === 0) {
      prevRef.current.disabled = true;
      restartRef.current.disabled = true;
      nextRef.current.disabled = false;
    } else if (currindex === slides.length - 1) {
      nextRef.current.disabled = true;
    }
  }, [currindex]);

  const prevSlide = (event) => {
    if (currindex > 0) {
      event.target.disabled = false;
      setCurrIndex((prev) => prev - 1);
    }
  };
  const nextSlide = (event) => {
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
      <button ref={prevRef} data-testid="button-prev" onClick={prevSlide}>
        Prev
      </button>
      <button ref={nextRef} data-testid="button-next" onClick={nextSlide}>
        Next
      </button>
      <button
        ref={restartRef}
        data-testid="button-restart"
        onClick={restartSlide}
      >
        Restart
      </button>
    </>
  );
};

export default App;
