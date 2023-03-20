import { 
    Box,
    Typography 
} from "@mui/material";
import { useState } from 'react';
import { send } from 'emailjs-com';

const ContactWidget = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Toby Nortje',
        message: '',
        reply_to: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_javiu6h',
            'template_g6a3y4d',
            toSend,
            '4Jl9D_Xd4nANigGKy'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err)
        })
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return(
        <Box id='Contact' sx={{
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
            }}>Contact Me</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                
            }}>
              <Box flexBasis='30%' display='flex' sx={{
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <Box p='0.5rem'><Typography variant='h6'>Full-name:</Typography><Typography variant='subtitle1' >Toby Nortje</Typography></Box>
                <Box p='0.5rem'><Typography variant='h6'>Phone number:</Typography><Typography variant='subtitle1' >{`(+27) 072 982 0545`}</Typography></Box>
                <Box p='0.5rem'><Typography variant='h6'>Email:</Typography><Typography variant='subtitle1' >tobynortje@gmail.com</Typography></Box>
                <Box p='0.5rem'><Typography variant='h6'>Location:</Typography><Typography variant='subtitle1' >Parow West, Cape Town, South Africa</Typography></Box>
              </Box>
              <Box flexBasis='70%'>
              <form onSubmit={onSubmit}>
                <Box>
                    <Typography variant='h6'>Send me a message</Typography>
                    <Box display='flex' sx={{
                        flexDirection: 'column',
                        alignItems: 'stretch'
                    }}>
                    <Box display='flex' p='0.5rem' gap='2rem'>
                        <input  name='from_name' type='text' required placeholder='Name' value={toSend.from_name} onChange={handleChange} style={{
                            flexBasis: '50%',
                            backgroundColor: '#474747',
                            borderRadius: '8px',
                            border: 'none',
                            p: '2rem'
                        }}/>
                    
                        <input  name='reply_to' type='email' required placeholder='Email' value={toSend.reply_to} onChange={handleChange} style={{
                            flexBasis: '50%',
                            backgroundColor: '#474747',
                            borderRadius: '8px',
                            border: 'none'
                        }}/>
                    </Box>
                    <Box display='flex' p='0.5rem'>    
                        <textarea  name='message' rows='5' required placeholder='Send me a message...' value={toSend.message} onChange={handleChange} style={{
                            width: '100%',
                            backgroundColor: '#474747',
                            borderRadius: '8px',
                            border: 'none'
                        }}></textarea></Box>
                    </Box> 
                    <Box display='flex' justifyContent='center' m='2rem'><button className='btn' type='submit'>Send Message</button></Box>
                </Box>
              </form>
              </Box>
            </Box>
            
          </Box>
        </Box>
    )
};

export default ContactWidget;