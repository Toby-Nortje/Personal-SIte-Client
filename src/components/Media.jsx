import { 
    Box
} from "@mui/material";
import { 
    GitHub,
    LinkedIn
} from "@mui/icons-material";

const Media = () => {

    return(
        <Box display='flex' m='4rem 0' justifyContent='center' gap='1rem'>
            <a href='https://github.com/Toby-Nortje' style={{textDecoration: 'none', color: 'white'}}>
            <GitHub sx={{
                '&:hover': {
                    cursor: 'pointer'
                }
            }}
            />
            </a>
            <a href='https://www.linkedin.com/' style={{textDecoration: 'none', color: 'white'}}>
            <LinkedIn sx={{
                '&:hover': {
                    cursor: 'pointer'
                }
            }}
            />
            </a>
        </Box>
    )
};

export default Media;