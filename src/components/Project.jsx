import { 
    Box,
    Typography,
    Backdrop,
    ClickAwayListener,
    useMediaQuery
} from "@mui/material";
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


const Project = ({app, name, theme, tint, caption1, caption2, caption3, caption4, caption5, projectInfo, client, tech, date, url, git}) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };


    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

    return(
        <Box p='4%' display='flex' justifyContent='center'>
            <Box onClick={handleToggle} sx={{
                backgroundColor: theme,
                width: '20rem',
                height: '20rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1rem',
                borderWidth: '0.5rem',
                borderColor: 'white',
                borderStyle: 'solid',
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: tint
                }
            }}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>{name}</Typography>
            </Box>


            
            <Backdrop
            sx={{ color: '#fff', zIndex: '100'}}
            open={open}
            position='relative'
            >
                <Box sx={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%'
                }} onClick={handleClose}/>
                <Box onClick={handleClose} sx={{
                        position: 'absolute',
                        top: '11%',
                        right: '11%',
                        '&:hover': {
                            cursor: 'pointer',
                            color: '#484747'
                        },
                        zIndex: '200'
                    }}><CloseIcon /></Box>
            
                <Box sx={{
                    display: isNonMobileScreens ? 'block' : 'block',
                    overflowY: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    height: '90%',
                    zIndex: '101',
                    background: '#666666',
                    borderRadius: '1rem',
                    borderWidth: '0.5rem',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    p: '3%',
                    position: 'relative'
                }}
                
                >
                    
                    <Box sx={{
                        flexBasis: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        p: '1.5rem',
                        
                        
                    }}>
                        <Typography variant='h5' 
                        sx={{ 
                            textAlign: 'center',
                            textDecoration: 'underline',
                            mb: '1rem'
                        }}
                        >{name}</Typography>
                        <Box mb='1rem'>
                            <Typography variant='h6' >Project Info:</Typography>
                            <Typography variant='p' >{projectInfo}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6'>Project Details:</Typography>

                        <Box display='flex' flexDirection='row' p='0.5rem 0'>
                            <Typography flexBasis='30%' variant='p' fontWeight='bold'>Client:</Typography>
                            <Typography flexBasis='70%' variant='p'>{client}</Typography>
                        </Box>
                        <Box display='flex' flexDirection='row' p='0.5rem 0'>
                            <Typography flexBasis='30%' variant='p' fontWeight='bold'>Technologies:</Typography>
                            <Typography flexBasis='70%' variant='p'>{tech}</Typography>
                        </Box>
                        <Box display='flex' flexDirection='row' p='0.5rem 0'>
                            <Typography flexBasis='30%' variant='p' fontWeight='bold'>Date:</Typography>
                            <Typography flexBasis='70%' variant='p'>{date}</Typography>
                        </Box>
                        <Box display='flex' flexDirection='row' p='0.5rem 0'>
                            <Typography flexBasis='30%' variant='p' fontWeight='bold'>Url:</Typography>
                            <Typography flexBasis='70%' variant='p'>{url}</Typography>
                        </Box>
                        <Box display='flex' flexDirection='row' p='0.5rem 0'>
                            <Typography flexBasis='30%' variant='p' fontWeight='bold'>GitHub:</Typography>
                            <Typography flexBasis='70%' ><a href={git}>{git}</a></Typography>
                        </Box>
                        </Box>

                    </Box>
                    <Box sx={{
                        flexBasis: '50%',
                        p: '3%'
                    }}>
                        <CCarousel controls indicators >
                            <CCarouselItem>
                                <CImage src={require(`images/${app}-site-1.png`)} alt='slide-1' style={{width: 'auto', maxWidth: '100%', borderRadius: '2rem', maxHeight: '80vh', margin: 'auto'}}/>
                                <CCarouselCaption>
                                    <Typography>{caption1}</Typography>
                                </CCarouselCaption>
                            </CCarouselItem>
                            <CCarouselItem>
                                <CImage src={require(`images/${app}-site-2.png`)} alt='slide-2' style={{width: 'auto', maxWidth: '100%', borderRadius: '2rem', maxHeight: '80vh', margin: 'auto'}}/>
                                <CCarouselCaption>
                                    <Typography>{caption2}</Typography>
                                </CCarouselCaption>
                            </CCarouselItem>
                            <CCarouselItem >
                                <CImage src={require(`images/${app}-site-3.png`)} alt='slide-3' style={{width: 'auto', maxWidth: '100%', borderRadius: '2rem', maxHeight: '80vh', margin: 'auto'}}/>
                                <CCarouselCaption>
                                    <Typography>{caption3}</Typography>
                                </CCarouselCaption>
                            </CCarouselItem>
                            <CCarouselItem>
                                <CImage src={require(`images/${app}-site-4.png`)} alt='slide-4' style={{width: 'auto', maxWidth: '100%', borderRadius: '2rem', maxHeight: '80vh', margin: 'auto'}}/>
                                <CCarouselCaption>
                                    <Typography>{caption4}</Typography>
                                </CCarouselCaption>
                            </CCarouselItem>
                            <CCarouselItem>
                                <CImage src={require(`images/${app}-site-5.png`)} alt='slide-5' style={{width: 'auto', maxWidth: '100%', borderRadius: '2rem', maxHeight: '80vh', margin: 'auto'}}/>
                                <CCarouselCaption>
                                    <Typography>{caption5}</Typography>
                                </CCarouselCaption>
                            </CCarouselItem>
                        </CCarousel>
                    </Box>
                    
                </Box>
                
            </Backdrop>
            

        </Box>
    )
};

export default Project;