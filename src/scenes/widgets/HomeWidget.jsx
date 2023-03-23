import { 
    Box,
    Typography,
    useMediaQuery
} from "@mui/material";

const HomeWidget = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

    return (
    <Box id='Home' sx={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: isNonMobileScreens ? 'left' : 'center'
        
    }}>
        <Box mb='2rem'>
            <Typography variant='h2'>I'm Toby,</Typography>
            <Typography variant='h4'>an aspiring full-stack Web Developer</Typography>
        </Box>
        <Box>

            <Typography variant='h6'>Welcome to my portfolio!</Typography>
        </Box>
        
    </Box>
    )
};

export default HomeWidget;