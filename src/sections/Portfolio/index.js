import Navigation from "../../navigation"

import { useEffect } from "react"

import { Link } from 'react-router-dom';

import { motion, useAnimation } from "framer-motion"

import '../Portfolio/index.css'
import projectsArray from "./projects"

import { useInView } from 'react-intersection-observer';

function Portfolio ({setState, state, divideReverse, portfolioRef}){

    state = setState(false)

    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);


    return (
    <div className = "master-container" ref = {portfolioRef}>
        <div className = "main-container" >
        {divideReverse}
            <div className = "portfolio-container" >
            {projectsArray.map((item, index) => (
                <motion.div 
                className = "project"
                ref = {ref}
                animate = {controls}
                initial = "hidden"
                variants ={{
                    visible: {opacity: 1},
                    hidden: {opacity: 0}
                }}
                transition = {
                    {
                        duration: 1, 
                        ease: "easeInOut",
                        delay: 1.5 + (index * 0.25)
                    }
                }
                key = {index}>
                    <img className = "image-holder" src = {item.image}></img>
                    <h1 className = "project-title-1">{item.title}</h1>
                    <div className = "content-container">
                        <h1 className = "project-title">{item.title}</h1>
                         <p className = "content">{item.description}</p> 
                         <a href = {item.repository} target = "_blank">
                            <button className = "repository-link">
                                <p className = "more-info">More Info</p>
                            </button>
                        </a> 
                    </div>
                </motion.div>
             ))}
            </div>
        </div>
    </div>
    )
}

export default Portfolio