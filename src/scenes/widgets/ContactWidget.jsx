import { 
    Box,
    Typography 
} from "@mui/material";

const ContactWidget = () => {

    return(
        <Box id='Contact' sx={{
            backgroundColor: '#666666',
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
            }}>Contact Me</Typography>
            </Box>
            <Box sx={{
                display: 'grid'
            }}>
                
            </Box>
            
          </Box>
        </Box>
    )
};

export default ContactWidget;