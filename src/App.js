import React, { useState, useEffect } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';

function App() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);
  const rightArrow = '<';
  const leftArrow = '>';
  const rightClosingArrow = '</';
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 6000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <main className="section">
      <div className="center">
        <img
          src="https://pbs.twimg.com/profile_images/1459375664059105284/fNS943YY_400x400.jpg"
          alt="Me"
          className="me-img"
        />
      </div>
      <div className="title">
        <h1>My Web Developer Tools</h1>
      </div>
      <div className="title">
        <h2>
          {rightArrow}My Skills{leftArrow}
        </h2>
      </div>
      <section className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, job, image, text } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{job}</p>
              <p className="text">{text}</p>
              <BsCodeSlash className="icon" />
            </article>
          );
        })}
      </section>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FaChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FaChevronRight />
      </button>
      <footer className="footer">
        <a href="https://react-manuel-morales-portfolio.netlify.app/">
          {rightClosingArrow}View My Portfolio{leftArrow}
        </a>
      </footer>
    </main>
  );
}

export default App;
