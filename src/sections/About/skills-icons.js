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
    
   <IconContext.Provider value = {{color: '#61DBFB', size: '65px'}}>
        <a href = "https://react.dev/" target = "_blank">
            <FaReact/>
        </a>
    </IconContext.Provider>,
   <IconContext.Provider value = {{color: '#ebebeb', size: '65px'}}>
        <a href = "https://developer.mozilla.org/en-US/docs/Web/CSS" target = "_blank">
            <FaCss3 /> 
         </a>
    </IconContext.Provider>,
    <IconContext.Provider value = {{color: '#5382a1', size: '65px'}}>
        <a href = "https://www.ibm.com/topics/java" target = "_blank">
            <FaJava />
        </a>
    </IconContext.Provider>,
    <IconContext.Provider value = {{color: '#ffde57' , size: '65px'}}>
        <a href = "https://www.python.org/about/" target = "_blank">
            <FaPython />
        </a>
    </IconContext.Provider>, 
    <IconContext.Provider value = {{color: 'white', size: '65px'}}>
        <a href = "https://learn.microsoft.com/en-us/dotnet/visual-basic/" target = "_blank">
        <SiVisualbasic />
        </a>
    </IconContext.Provider>  ,
    <IconContext.Provider value = {{color: 'red', size: '65px'}}>
        <a href = "https://aws.amazon.com/what-is/sql/" target = "_blank">
            <DiMsqlServer />
        </a>
    </IconContext.Provider>,
    <IconContext.Provider value = { {color: 'white', size: '65px'}}>
        <a href = "https://www.coursera.org/articles/what-is-c-plus-plus" target = "_blank">
            <CgCPlusPlus />
        </a>
    </IconContext.Provider>,
    <IconContext.Provider value = {{color: 'white', size: '65px'}}>
        <a href = "https://www.adobe.com/about-adobe.html" target = "_blank">
            <SiAdobecreativecloud />
        </a>
    </IconContext.Provider>
    
];

export default skillsIcons