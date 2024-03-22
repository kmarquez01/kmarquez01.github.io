import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import skillsIcons from "./skills-icons"


const SkillHolder = ({ref, controls, inView}) => {

    const dropAnimation = {
        top: "10px",
        opacity: 1,
        transition: {
            ease: "easeInOut",
            delay: 2,
            duration: 1
        }
    }
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return(
        skillsIcons.map((Icon, i) => { 
            return(
                <div className = "wrap-container">
                <motion.div
                ref = {ref}
                className = "skill-holder"
                animate = {controls}
                initial = "hidden"
                variants ={{
                    visible: {top: "10px", opacity: 1},
                    hidden: {opacity: 0, top: "-10px"}
                }}
                transition = {{
                    ease: "easeInOut",
                    delay: 2 + (i * 0.25),
                    duration: 1
                }}
                key = {i}
            >                  
                    <div className = "skill">{Icon.image}</div>
                    <div className = "skill-name">{Icon.iconName}</div>
                </motion.div>
                </div>
            )
        })
    )

    
}

export default SkillHolder