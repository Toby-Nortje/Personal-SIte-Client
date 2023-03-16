import { 
    Box,
    Typography,
    useMediaQuery
} from "@mui/material";

const AboutWidget = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 800px)');

    return (
        <Box id='About' sx={{
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
            }}>About Me</Typography>
            </Box>
            <Box display={isNonMobileScreens ? 'flex' : 'block'}>
                <Box flexBasis={isNonMobileScreens ? '70%' : undefined} p='1rem' >
                    <Typography variant='h5' mb='1rem'>I'm Toby Nortje, an aspiring Full-stack web developer</Typography>
                    <Typography variant='p' >I've been an avid fan of tech and computers since I was a kid and would always
                                            try to find some new gadget to tinker with or some computer problem to solve. 
                                            I went to university initially to study Engineering but during my third year due 
                                            to issues regarding my health at the time I had to cut my studies short. During that
                                            time I had gained further love for coding and became determined to turn my situation
                                            around and find success as a developer.</Typography>
                                            <br />
                    <Typography variant='p'>I have since been learning Web development through sites like Udemy and through 
                                            my own personal projects.</Typography>
                    <br />
                    <Typography variant='p'>I am an expretemely dedicated learner spending all my time off from work to 
                                            create my own personal website projects. I am hoping to get an internship at 
                                            a web development company to take my skills further an create a career for 
                                            myself within the industry.</Typography>
                </Box>
                <Box flexBasis={isNonMobileScreens ? '30%' : undefined} p='1rem'>
                    <Box display='flex' gap='1rem'><Typography>Name: </Typography><Typography>Toby Nortje</Typography></Box>
                    <Box display='flex' gap='1rem'><Typography>Email: </Typography><Typography>tobynortje@gmail.com</Typography></Box>
                    <Box display='flex' gap='1rem'><Typography>Age: </Typography><Typography>23</Typography></Box>
                    <Box display='flex' gap='1rem'><Typography>From: </Typography><Typography>Cape Town, South Africa</Typography></Box>
                </Box>
            </Box>
            
          </Box>
        </Box>
    )
};

export default AboutWidget;