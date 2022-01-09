import React from "react";
import { Link } from "react-router-dom";
import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";

const Works = () => {
  let currentSlide = 0;
  window.addEventListener("resize", () => {
    const slider = document.querySelector(".work-grid");
    slider.scroll({behavior: "auto"})
    moveSlide(currentSlide);
    slider.scroll({behavior: "smooth"})
  });

  const moveSlide = (nextSlide) => {
    const slides = [...document.querySelectorAll(".slides")];
    const slider = document.querySelector(".work-grid");
    const slidePosition = nextSlide * slides[0].clientWidth;
    slider.scrollTo(slidePosition, 0);
    currentSlide = nextSlide;
  };
  const radioSlide = (index) => {
    const radios = [...document.querySelectorAll(".radio-btn")];

    radios[currentSlide].classList.remove("active");
    radios[index].classList.add("active");
    moveSlide(index);
  };
  const showNext = () => {
    const slides = [...document.querySelectorAll(".slides")];
    const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

    moveSlide(nextSlide);
    console.log("next");
  };

  const showPrev = () => {
    const slides = [...document.querySelectorAll(".slides")];
    const nextSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    moveSlide(nextSlide);
  };

  return (
    <div className="works">
      <h3>WORKS</h3>
      <div className="grid-container">
      <div className="work-grid">
        <figure className="slides fig-1">
          <img src={work1} alt="" />
        </figure>
        <figure className="slides">
          <img src={work2} alt="" />
        </figure>
        <figure className="slides">
          <img src={work2} alt="" />
        </figure>
        <figure className="slides">
          <img src={work3} alt="" />
        </figure>
        <div className="slides see-more-slide ">
          <Link to="/my-works">
            <div className="see-more">
              <p>See More</p>
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 52h62.344L52.888 73.456a4 4 0 1 0 5.657 5.656l28.283-28.284c.186-.186.352-.391.498-.609.067-.101.114-.21.172-.315.066-.124.142-.242.195-.373.057-.135.089-.275.129-.415.033-.111.076-.217.099-.331.052-.26.079-.522.079-.785l-.001-.009a4.032 4.032 0 0 0-.078-.774c-.024-.12-.069-.231-.104-.349-.039-.133-.069-.268-.123-.397-.058-.139-.136-.265-.208-.396-.054-.098-.097-.198-.159-.292a3.94 3.94 0 0 0-.501-.614L58.544 16.888a4.001 4.001 0 0 0-5.657 5.657L74.343 44H12a4 4 0 0 0 0 8z"
                  fill="#6798a3"
                  class="fill-000000"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      </div>
     
      <Link to="/my-works">
        <button className="more-projects">More Projects</button>
      </Link>
      <button onClick={showPrev} className="prev">
        <svg
          className="arrows prev-slide"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 512 512"
        >
          <path
            d="M352 115.4 331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"
            fill="#6798a390"
            class="fill-000000"
          ></path>
        </svg>
      </button>

      <button onClick={showNext} className="next">
        <svg
          className="arrows next-slide"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 512 512"
        >
          <path
            d="M160 115.4 180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
            fill="#6798a390"
            class="fill-000000"
          ></path>
        </svg>
      </button>

    </div>
  );
};

export default Works;

/* <button onClick={() => radioSlide(0)} className="radio-btn active">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 16 16"
          >
            <circle
              id="first"
              cx="8"
              cy="8"
              r="8"
              fill="#6798a3"
              class="fill-000000"
            ></circle>
          </svg>
        </button>
        <button onClick={() => radioSlide(1)} className="radio-btn">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 16 16"
          >
            <circle
              id="second"
              cx="8"
              cy="8"
              r="8"
              fill="#6798a3"
              class="fill-000000"
            ></circle>
          </svg>
        </button>
        <button onClick={() => radioSlide(2)} className="radio-btn">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 16 16"
          >
            <circle
              id="third"
              cx="8"
              cy="8"
              r="8"
              fill="#6798a3"
              class="fill-000000"
            ></circle>
          </svg>
        </button>
        <button onClick={() => radioSlide(3)} className="radio-btn">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 16 16"
          >
            <circle
              id="fourth"
              cx="8"
              cy="8"
              r="8"
              fill="#6798a3"
              class="fill-000000"
            ></circle>
          </svg>
        </button>
        <button onClick={() => radioSlide(4)} className="radio-btn">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 16 16"
          >
            <circle
              id="fifth"
              cx="8"
              cy="8"
              r="8"
              fill="#6798a3"
              class="fill-000000"
            ></circle>
          </svg>
        </button> */
