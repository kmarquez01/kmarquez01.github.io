import { HiMenu } from "react-icons/hi"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaTimes } from "react-icons/fa"
import { useMediaQuery } from 'usehooks-ts'
import { DeviceSize } from './menuToggle'
import "./index.css"

import React, {useState, useEffect, useRef} from "react"

function Navigation(props){

   const [state, setState] = useState(false)


   let sideRef = useRef();

    useEffect(() => {
        let mouseChecker = (e) =>{
            if(!sideRef.current.contains(e.target)){
                setState(false)
            }
        }
        document.addEventListener("mousedown", mouseChecker);

        return() => {
        document.removeEventListener("mousedown" , mouseChecker)
        }
    })

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
        })

    }

    const handleClick = () => {
        
        if(state === false){
           setState(true)
        }
        else{
        setState(false)
        }
       
    }

   const object = 

       <div className = "dropdown-menu">
           <li onClick = {() => {scrollToSection(props.homeRef); setState(false);}}><button className = "navbut" >Home</button></li>
           <li onClick = {() => {scrollToSection(props.aboutRef); setState(false);}}><button className = "navbut">About</button></li>
           <li onClick = {() => {scrollToSection(props.portfolioRef); setState(false);}}><button className = "navbut">Portfolio</button></li>
           <li onClick = {() => {scrollToSection(props.contactRef); setState(false);}}><button className = "navbut">Contact</button></li>
       </div>
       

    const webNav = 
        <div className = "webnav-menu">
           <li onClick = {() => {scrollToSection(props.homeRef); setState(false);}}><button className = "navbut" >Home</button></li>
           <li onClick = {() => {scrollToSection(props.aboutRef); setState(false);}}><button className = "navbut">About</button></li>
           <li onClick = {() => {scrollToSection(props.portfolioRef); setState(false);}}><button className = "navbut">Portfolio</button></li>
           <li onClick = {() => {scrollToSection(props.contactRef); setState(false);}}><button className = "navbut">Contact</button></li>
        </div>
       console.log("test");
    
    const isMobile = useMediaQuery('(max-width: 800px)')

    
    return(
               
            <div className ="nav" ref = {sideRef}>
            <div className = "container flex">   
                <nav className = "navigation-bar">
                    <ul className = "nav-holder">
                        {(!isMobile && state === false) ? webNav:

                        <button className = "sandwich" onClick = {handleClick}>
                            {state === true ? <FaTimes />: <HiMenu/>} 
                            {state === false ? '' : object}                 
                        </button>  }
                                     
                    </ul>
                    
                </nav>
            </div>
        </div>
      
        ) 
    
}

export default Navigation