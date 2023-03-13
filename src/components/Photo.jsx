import { 
    Box 
} from "@mui/material";
import MyImage from 'images/default-user-image.jpg';

const Photo = () => {

    return(
        <Box display='flex' justifyContent='center' m='2rem 0'>
            
            <img alt='profile' src={MyImage} style={{ 
                objectFit: 'contain',
                width: '70%',
                height: 'auto',
                borderRadius: '50%',
                padding: '.5rem',
                backgroundColor: 'white'
                }}
                />
            
        </Box>
    )
};

export default Photo;