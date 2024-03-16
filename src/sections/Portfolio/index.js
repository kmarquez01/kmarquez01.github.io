import Navigation from "../../navigation"

import { useRef, useState } from "react"

import { Link } from 'react-router-dom';

import '../Portfolio/index.css'
import projectsArray from "./projects"

function Portfolio ({setState, state, divideReverse, portfolioRef}){

    state = setState(false)

    return (
    <div className = "master-container" ref = {portfolioRef}>
        <div className = "main-container" >
        {divideReverse}
            <div className = "portfolio-container" >
            {projectsArray.map((item, index) => (
                <div href = {item.repository} target = "_blank" className = "project" key = {index}>
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
                </div>
             ))}
            </div>
        </div>
    </div>
    )
}

export default Portfolio