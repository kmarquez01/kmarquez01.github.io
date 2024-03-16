import logo from './logo.svg';
import Home from './sections/Home/index'
import About from './sections/About/index'
import Portfolio from './sections/Portfolio/index'
import Contact from './sections/Contact/index'
import Navigation from './navigation';
import React from "react"
import {useState, useRef, useEffect} from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import './sections/Home/index.css'
// import Portfolio from './sections/portfolio'

function App() {

  const [state, setState] = useState(false)

  let homeRef = useRef(null);

  let aboutRef = useRef(null);

  let portfolioRef = useRef(null);

  let contactRef = useRef(null);

  const controls = useAnimation();
  const controls1 = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    }
  }, [controls1, inView1]);


  const divider = 
        <div className = "skills-breaker-line">
            <div className = "circle"></div>
            <div className = "circle"></div>
            <div className = "circle"></div>
            <div className = "circle"></div>
            <div className = "dividing-line-1"></div>
            <h1 className = "skills-header">Skills</h1>
            <div className = "dividing-line-2"></div>
            <motion.div 
            ref = {ref}
            className = "cover-1"
            animate = {controls}
            transition = { {duration: 2, ease: 'easeInOut', repeat: 0}}
            variants = {
              {
                visible: {width: ['100%', '0%']},
                hidden: {width: '100%'}
              }
            }
            >
            </motion.div>
        </div>

const divideReverse = 
        <div className = "skills-breaker-line-reverse" >
            <div className = "circle"></div>
            <div className = "circle"></div>
            <div className = "circle"></div>
            <div className = "circle"></div>
            <div className = "dividing-line-1"></div>
            <h1 className = "skills-header">Portfolio</h1>
            <div className = "dividing-line-2"></div>
            <motion.div 
            ref = {ref1}
            className = "cover-2"
            animate = {controls1}
            transition = { {duration: 2, ease: 'easeInOut', repeat: 0}}
            variants = {
              {
                visible: {width: ['100%', '0%']},
                hidden: {width: '100%'}
              }
            }
            >
            </motion.div>
        </div>

  return (
    <div className="App">
      <Navigation homeRef = {homeRef} aboutRef = {aboutRef} portfolioRef = {portfolioRef} contactRef = {contactRef}/>
      <Home  homeRef = {homeRef} divider = {divider}/>
      <About aboutRef = {aboutRef} divider = {divider} state = {state} setState = {setState}/>
      <Portfolio portfolioRef = {portfolioRef} divideReverse = {divideReverse} state = {state} setState = {setState}/>
      <Contact contactRef = {contactRef} />

    </div>
  );
}

export default App;
