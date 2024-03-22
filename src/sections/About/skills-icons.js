import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiVisualbasic } from "react-icons/si";
// import VBA from "../../illustrations/vba.svg"
import { DiMsqlServer } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiAdobecreativecloud } from "react-icons/si";
import { IconContext } from "react-icons";

const skillsIcons = [
   { 
        iconName: "React",
        image: <IconContext.Provider value = {{color: '#61DBFB', size: '4em' }}>
                    <a href = "https://react.dev/" target = "_blank">
                        <FaReact />
                    </a>
               </IconContext.Provider>
    },
   {
        iconName: "CSS",
        image: <IconContext.Provider value = {{color: '#ebebeb', size: '4em'}}>
                    <a href = "https://developer.mozilla.org/en-US/docs/Web/CSS" target = "_blank">
                        <FaCss3 /> 
                    </a>
               </IconContext.Provider>
    },
    {
        iconName: "Java",
        image:  <IconContext.Provider value = {{color: '#5382a1', size: '4em'}}>
                    <a href = "https://www.ibm.com/topics/java" target = "_blank">
                        <FaJava />
                    </a>
                </IconContext.Provider>
    },
    {
        iconName: "Python",
        image: <IconContext.Provider value = {{color: '#ffde57' , size: '4em'}}>
                    <a href = "https://www.python.org/about/" target = "_blank">
                        <FaPython />
                    </a>
               </IconContext.Provider>
    }, 
    { 
        iconName: "VB",
        image:   <IconContext.Provider value = {{color: 'white', size: '4em'}}>
                    <a href = "https://learn.microsoft.com/en-us/dotnet/visual-basic/" target = "_blank">
                    <SiVisualbasic />
                    </a>
                </IconContext.Provider> 
    },
    {
        iconName: "SQL",
        image:  <IconContext.Provider value = {{color: 'red', size: '4em'}}>
                    <a href = "https://aws.amazon.com/what-is/sql/" target = "_blank">
                        <DiMsqlServer />
                    </a>
                </IconContext.Provider>
    },
    {
        iconName: "C++",
        image:  <IconContext.Provider value = { {color: 'white', size: '4em'}}>
                    <a href = "https://www.coursera.org/articles/what-is-c-plus-plus" target = "_blank">
                        <CgCPlusPlus />
                    </a>
                </IconContext.Provider>
    },
    {
        iconName: "Adobe",
        image:<IconContext.Provider value = {{color: 'white', size: '4em'}}>
        <a href = "https://www.adobe.com/about-adobe.html" target = "_blank">
            <SiAdobecreativecloud />
        </a>
    </IconContext.Provider>}
    
];

export default skillsIcons