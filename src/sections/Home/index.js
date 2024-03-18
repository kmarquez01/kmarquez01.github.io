import Navigation from "../../navigation"

import { useRef } from "react"

import {ReactComponent as PersonIcon} from "../../illustrations/kirby-art.svg"

import clouds from "../../illustrations/m2i8i8m2H7d3G6K9.png"

import window from "../../"

import '../Home/index.css'

import { motion } from "framer-motion"


function Home ({homeRef}){

const animationStyle1 = {
    left: "400px",
    transition: {
        ease: "easeInOut",
        delay: 0.4,
        duration: 15,
        repeat: Infinity
        
    }
}

const animationStyle2 = {
    left: "400px",
    transition: {
        ease: "easeInOut",
        duration: 20,
        delay: 2,
        repeat: Infinity
        
    }
}

const animationStyle3 = {
    left: "375px",
    transition: {
        ease: "easeInOut",
        delay: 0.6,
        duration: 17,
        repeat: Infinity
        
    }
}

const nameAnimationStyle = {
    top: "0px",
    transition: {
        duration: 0.5,
        
    }
}

const occupationAnimationStyle = {
    opacity: 1,
    transition: {
        delay: 0.5,
        duration: 1,       
    }
}

    return (
    <div className = "master-container" ref = {homeRef}>
       <div className = "home-container">
            <div className = "name-occupation-container">
                <motion.h1 
                className = "name-container"
                animate = {nameAnimationStyle}>
                    KIRBY MARQUEZ
                </motion.h1>
                <motion.h2
                className = "occupation-container"
                animate = {occupationAnimationStyle}>
                    Fullstack Developer
                </motion.h2>       
            </div>
            <div className = "illustration-container">
                <PersonIcon className = "personIcon" stroke = "black"/>
                {/* <img className = "personIcon" src = {personIcon} alt = "My Icon" /> */}
                <div className = "window-wrap-container">
                    <div className = "window-container">
                        <div className = "clouds-container">
                            <motion.img 
                            className = "cloud-2" 
                            src = {clouds}
                            animate = {animationStyle2}>
                            </motion.img>
                            <motion.img 
                                className = " cloud-1" 
                                src = {clouds}
                                animate = {animationStyle1}>
                            </motion.img>
                        </div>
                        <div className = "clouds-container">
                        <motion.img className = "cloud-3" 
                        src = {clouds}
                        animate = {animationStyle3}>

                        </motion.img>
                        </div>
                        
                    </div>
                </div>
            </div>
       </div>
    </div>
    )
}

export default Home