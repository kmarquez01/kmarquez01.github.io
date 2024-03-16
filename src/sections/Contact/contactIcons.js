import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IconContext } from "react-icons";


    <svg width = "65px" height = "65px">
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="5%"  stopColor="gold" />
            <stop offset="95%" stopColor="red" />
          </linearGradient>
        </defs>
    </svg>

const mediaIcons = [
    {
        image: 
            <IconContext.Provider value = {{color: '#0077B5', size: '65px'}}>
                <FaLinkedin />
            </IconContext.Provider>,
        link: "https://www.linkedin.com/in/kirby-marquez-0804b0222/"
    },
    {
        image: 
            <IconContext.Provider value = {{color: '#FFFFFF', size: '65px'}}>
                <FaGithubSquare />
            </IconContext.Provider>,
        link: "https://github.com/kmarquez01"
    },
    {
        image: <IconContext.Provider value = {{ attr: {fill: '#962fbf'}, size: '65px'}}>          
                    <FaSquareInstagram />
                </IconContext.Provider>,
        link: "https://www.instagram.com/kirbymarquez_/"
    }
]

export default mediaIcons