import { 
    Box,
    Typography,
    useMediaQuery
} from "@mui/material";
import Project from "components/Project";

const ProjectsWidget = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

    return(
        <Box id='Projects' sx={{
            backgroundColor: '#666666',
            p: '2%'
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
                m: '5% 0'
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
                    width: '80%'
                }
            }}>Projects</Typography>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: isNonMobileScreens ? '50% 50%' : '100%'
            }}>
                <Project app='Messenger' name='Messenger App' theme='#8625be' tint='#9e51cb'
                    caption1=''
                    caption2=''
                    caption3=''
                    caption4=''
                    caption5=''
                    projectInfo='This project was created with the goal to recreate the functionality of the popular chat
                     messaging app, Discord. I design and developed both the backend logic for data storage, management and
                      API, as well as the frontend to allow for the ability for users to communicate in real time through messages
                       and images.'
                    client='Personal project'
                    tech='HTML5, CSS3, React, Node.js, Express, MongoDB'
                    date='Project stated on: 13 Feb 2023'
                    url='{Not currently hosted}'
                    git='https://github.com/Toby-Nortje/Messenger-Site'
                />
                <Project app='Social' name='Social Media App' theme='#5dbe25' tint='#7dcb51'
                    caption1=''
                    caption2=''
                    caption3=''
                    caption4=''
                    caption5=''
                    projectInfo='This project was designed with the goal of understanding how to develop a site using the MERN stack.
                     The intent was to create a social media site with similar functionality to twitter allowing users to create a 
                     profile, make posts, add friends and like and comment on other users posts. I achieved the fuctionality of most
                      of these features except for the ability to comment on posts due to my still novice undertanding of data management
                       at the time.'
                    client='Personal project'
                    tech='HTML5, CSS3, React, Node.js, Express, MongoDB'
                    date='Project stated on: 20 Jan 2023'
                    url='{Not currently hosted}'
                    git='https://github.com/Toby-Nortje/Social-Media-SIte'
                />
            </Box>
            
          </Box>
        </Box>
    )
};

export default ProjectsWidget;