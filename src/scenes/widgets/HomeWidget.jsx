import { 
    Box,
    Typography 
} from "@mui/material";

const HomeWidget = () => {

    return (
    <Box id='Home' sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        
    }}>
        <Box mb='2rem'>
            <Typography variant='h5'>Welcome,</Typography>
            <Typography variant='h2'>I'm Toby,</Typography>
            <Typography variant='h4'>an aspiring full-stack Web Developer</Typography>
        </Box>
        <Box>
            <Typography variant='h6'></Typography>
            <Typography variant='p'>Welcome to my portfolio!</Typography>
        </Box>
        
    </Box>
    )
};

export default HomeWidget;