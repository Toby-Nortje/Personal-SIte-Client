import { 
    Box,
    Typography,
    useMediaQuery
} from "@mui/material";
import Skill from "components/Skill";
import { 
    Html,
    Css,
    Javascript 
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faHtml5, faCss3, faJs, faNode, faReact,  } from "@fortawesome/fontawesome-free-brands";
import { faDatabase, faB } from "@fortawesome/free-solid-svg-icons";


const SkillsWidget = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const mediumScreens = useMediaQuery('(min-width: 600px)');



    return(
        <Box id='Skills' sx={{
            backgroundColor: '#666666',
            p:'2%'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            m: '3%',
            p: '3%'
          }}>
            <Box sx={{
                alignSelf: 'center',
                position: 'relative',
                m: '5%'
            }}>
            <Typography variant="h2" sx={{
                '&::after': {
                    position: 'absolute',
                    content: "''",
                    height: '4px',
                    bottom: '-4px',
                    margin: '0 auto',
                    left: '0',
                    right: '0',
                    width: '50%',
                    background: '#d03bd8',
                    transition: '.5s',
                },
                '&:hover::after': {
                    width: '80%',
                }
            }}>Skills</Typography>
            </Box>

            <Box>
                <Typography variant='h6' mb='1rem'>What can I do?</Typography>
                <Typography variant='p'>I am experienced with how to develop a Full-Stack MERN application 
                                        while implementing industry standard file management. Using the
                                        MERN stack means I can manage the sites data using MongoDB/Mongoose,
                                        impletementing the web-framework for the backend with Express and Node.js
                                        and finally creating a client side Javascript framework with React.</Typography>
                <br />
                <Typography variant='p'>This allows me to efficiently create fully functional websites. </Typography>
            </Box>

            <Box gap='1rem' sx={{
                display: 'grid',
                gridTemplateColumns: isNonMobileScreens ? '33% 33% 33%' : mediumScreens ? 'auto auto' : 'auto',
                p: '1rem',
                mt: '1rem'
            }}>
                <Skill 
                    icon={(<FontAwesomeIcon icon={faHtml5} size='2xl'/>)}
                    name='HTML'
                    score='85%'
                />
                <Skill 
                    icon={(<FontAwesomeIcon icon={faCss3} size='2xl'/>)}
                    name='Css'
                    score='65%'
                />
                <Skill 
                    icon={(<FontAwesomeIcon icon={faJs} size='2xl'/>)}
                    name='JavaScript'
                    score='85%'
                />
                <Skill 
                    icon={(<FontAwesomeIcon icon={faNode} size='2xl'/>)}
                    name='Node Js'
                    score='70%'
                />
                <Skill 
                    icon={(<FontAwesomeIcon icon={faNodeJs} size='2xl'/>)}
                    name='Express Js'
                    score='70%'
                />
                <Skill 
                    icon={(<FontAwesomeIcon icon={faDatabase} size='2xl'/>)}
                    name='MongoDB'
                    score='75%'
                />
                <Skill 
                    icon={(<FontAwesomeIcon icon={faReact} size='2xl'/>)}
                    name='React'
                    score='85%'
                />
                <Skill 
                    icon={(<FontAwesomeIcon icon={faB} size='2xl'/>)}
                    name='Bootstrap'
                    score='60%'
                />
            </Box>
            
          </Box>
        </Box>
    )
};

export default SkillsWidget;