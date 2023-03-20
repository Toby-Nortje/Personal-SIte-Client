import { 
    Box,
    Typography,
    useMediaQuery
} from "@mui/material";

const ResumeWidget = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

    return(
        <Box id='Resume' sx={{
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
            }}>Resume</Typography>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: isNonMobileScreens ? '50% 50%' : '100%'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',

                    
                }}>
                    <Box position='relative'>
                    <Typography variant='h4' sx={{
                        textAlign: 'center',
                        '&::after': {
                        position: 'absolute',
                        content: "''",
                        height: '2px',
                        bottom: '-4px',
                        margin: '0 auto',
                        left: '0',
                        right: '0',
                        width: '20%',
                        background: 'white',
                        transition: '.5s',
                        }
                    }}>Education</Typography>
                    </Box>

                    <Box sx={{
                        p: '1rem',
                        m: '2rem 2rem 1rem',
                        backgroundColor: '#474747',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <Box sx={{
                            backgroundColor: '#d03bd8',
                            borderRadius: '5px',
                            p: '5px',
                            fontSize: '12px'
                            
                        }}>2013 - 2017</Box>
                        <Typography variant='h5'>National Senior Cetificate</Typography>
                        <Typography fontSize='18px' color='#d03bd8'>Edgemead High school</Typography>
                    </Box>
                    <Box sx={{
                        p: '1rem',
                        m: '1rem 2rem',
                        backgroundColor: '#474747',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <Box sx={{
                            backgroundColor: '#d03bd8',
                            borderRadius: '5px',
                            p: '5px',
                            fontSize: '12px'
                            
                        }}>2018 - 2021</Box>
                        <Typography variant='h5'>{'[Degree incomplete] BEng E&E'}</Typography>
                        <Typography fontSize='18px' color='#d03bd8'>Stellenbosch University</Typography>
                        <Typography>Continued into 3rd year before stopping studies</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',

                    
                }}>
                    <Box position='relative'>
                    <Typography variant='h4' sx={{
                        textAlign: 'center',
                        '&::after': {
                        position: 'absolute',
                        content: "''",
                        height: '2px',
                        bottom: '-4px',
                        margin: '0 auto',
                        left: '0',
                        right: '0',
                        width: '20%',
                        background: 'white',
                        transition: '.5s',
                        }
                    }}>Experience</Typography>
                    </Box>

                    <Box sx={{
                        p: '1rem',
                        m: '2rem 2rem 1rem',
                        backgroundColor: '#474747',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <Box sx={{
                            backgroundColor: '#d03bd8',
                            borderRadius: '5px',
                            p: '5px',
                            fontSize: '12px'
                            
                        }}>Currently Employed</Box>
                        <Typography variant='h5'>Sales Assistant</Typography>
                        <Typography fontSize='18px' color='#d03bd8'>Parow Family Pharmacy</Typography>
                    </Box>
                    
                </Box>
                <Box>

                </Box>
            </Box>
            
          </Box>
        </Box>
    )
};

export default ResumeWidget;