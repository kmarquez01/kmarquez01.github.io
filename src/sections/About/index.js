import Navigation from "../../navigation"

import { useRef, useState, useEffect } from "react"

import skillsIcons from "./skills-icons"

import '../About/index.css'

import myLogo from "../../images/my_logo1.png"

import SkillHolder from "./skillHolder"

import { motion, useAnimation } from "framer-motion"

import { useInView } from 'react-intersection-observer';

function About ({setState, divider, state, aboutRef}){

    state = setState(true)

    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    const slideAnimation = {
        left: "0",
        opacity: 1,
        transition: {
            ease: "easeInOut",
            delay: 0.4,
            duration: 1
        }
    }

    const opacityAnimation = {
        opacity: 1,
        transition: {
            ease: "easeInOut",
            delay: 0.4,
            duration: 1
        }
    }

    return (
    <div className = "master-container" ref = {aboutRef}>
        <div className = "main-container">
            <div className = "about-container">
                    <div className = "about-holder-container">
                        <div className = "about-header-wrap">
                            <motion.h1
                            ref = {ref}
                            className = "about-header"
                            animate = {controls}
                            variants ={{
                                visible: slideAnimation,
                                hidden: {opacity: 0, left: "-300px"}
                            }}>
                            ABOUT ME
                            </motion.h1>
                        </div>
                        <motion.p
                        ref = {ref}
                        className="description-container"
                        animate = {controls}
                        variants ={{
                            visible: opacityAnimation,
                            hidden: {opacity: 0, left: "-300px"}
                        }}>
                            I am a student at Simon Fraser University, 
                            looking to get into Full-Stack Development. 
                            I hope to create working applications, coupled with back end coding. 
                            A recent experience includes an internship focused on Database development.
                        </motion.p>
                    </div>
                    <div className = "illustration-container-logo">
                        <div className = "picture-container">
                            <img className = "my-picture" src = {myLogo}></img>
                        </div>
                    </div>
            </div>
            <div className = "skills-container">
            {divider}
                <div className = "skills-list-container">    
                    <SkillHolder controls = {controls} ref = {ref} inView = {inView}/>      
                </div>
            </div>
        </div>
    </div>
    )
}

export default About