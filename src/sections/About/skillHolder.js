import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const dropAnimation = {
    top: "10px",
    opacity: 1,
    transition: {
        ease: "easeInOut",
        delay: 0.4,
        duration: 1
    }
}

const SkillHolder = ({icon}) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);


    return(
        <div className = "wrap-container">
        <motion.div
        ref = {ref}
        className = "skill-holder"
        animate = {controls}
        initial = "hidden"
        variants ={{
            visible: dropAnimation,
            hidden: {opacity: 0, top: "-10px"}
        }}
        >                  
            <div className = "skill">{icon}</div>
        </motion.div>
        </div>
    )
}

export default SkillHolder