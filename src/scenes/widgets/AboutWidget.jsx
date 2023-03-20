import { 
    Box,
    Typography,
    useMediaQuery,
    Divider
} from "@mui/material";

const AboutWidget = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

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
            }}>About Me</Typography>
            </Box>
            <Box display={isNonMobileScreens ? 'flex' : 'block'}>
                <Box flexBasis={isNonMobileScreens ? '70%' : undefined} p='1rem' >
                    <Typography variant='h5' mb='1rem'>I'm Toby Nortje, an aspiring Full-stack web developer</Typography>
                    <Typography >I've been an avid fan of tech and computers since I was a kid and would always
                                            try to find some new gadget to tinker with or some computer problem to solve. 
                                            I went to university initially to study Engineering but during my third year I 
                                            decided I would no longer continue as I no longer felt motivated by this career choice.
                                            I instead decided to take a break from university to take my passion for coding further
                                            discovering my love for web development in the process.</Typography>
                                            <br />
                    <Typography >I have since been learning Web development through sites like Udemy and through 
                                            my own personal projects.</Typography>
                    <br />
                    <Typography >I am an expretemely dedicated learner spending all my time off from work to 
                                            create my own personal website projects. I am hoping to get an internship at 
                                            a web development company to take my skills further an create a career for 
                                            myself within the industry.</Typography>
                </Box>
                <Box flexBasis={isNonMobileScreens ? '30%' : undefined} display='flex' flexDirection='column' p='1rem' justifySelf='center' justifyContent='center'>
                    <Box display='flex' ><Typography flexBasis='25%' fontWeight='bold'>Name: </Typography><Typography flexBasis='75%'>Toby Nortje</Typography></Box>
                    <Box sx={{ display: 'flex', borderTop: '1px solid white', position: 'relative', left: '10%', right: '10%', width: '80%', m: '1rem 0'}}/>
                    <Box display='flex' ><Typography flexBasis='25%' fontWeight='bold'>Email: </Typography><Typography flexBasis='75%' color='#d03bd8'>tobynortje@gmail.com</Typography></Box>
                    <Box sx={{ display: 'flex', borderTop: '1px solid white', position: 'relative', left: '10%', right: '10%', width: '80%', m: '1rem 0'}}/>
                    <Box display='flex' ><Typography flexBasis='25%' fontWeight='bold'>Age: </Typography><Typography flexBasis='75%'>23</Typography></Box>
                    <Box sx={{ display: 'flex', borderTop: '1px solid white', position: 'relative', left: '10%', right: '10%', width: '80%', m: '1rem 0'}}/>
                    <Box display='flex'><Typography flexBasis='25%' fontWeight='bold'>From: </Typography><Typography flexBasis='75%'>Cape Town, South Africa</Typography></Box>
                    
                </Box>
            </Box>
            
          </Box>
        </Box>
    )
};

export default AboutWidget;