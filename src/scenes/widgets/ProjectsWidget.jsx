import { 
    Box,
    Typography,
    useMediaQuery
} from "@mui/material";
import Project from "components/Project";

const ProjectsWidget = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 800px)');

    return(
        <Box id='Projects' sx={{
            backgroundColor: '#333333',
            p: '2rem'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            m: '2rem',
            p: '2rem'
          }}>
            <Box sx={{
                alignSelf: 'center',
                position: 'relative',
                m: '3rem'
            }}>
            <Typography variant="h2" sx={{
                '&::after': {
                    position: 'absolute',
                    content: "''",
                    height: '2px',
                    bottom: '-4px',
                    margin: '0 auto',
                    left: '0',
                    right: '0',
                    width: '50%',
                    background: 'white',
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
                />
                <Project app='Social' name='Social Media App' theme='#5dbe25' tint='#7dcb51'
                    caption1=''
                    caption2=''
                    caption3=''
                    caption4=''
                    caption5=''
                />
            </Box>
            
          </Box>
        </Box>
    )
};

export default ProjectsWidget;