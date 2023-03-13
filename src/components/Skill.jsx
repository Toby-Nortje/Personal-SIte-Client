import { 
    Box,
    Typography 
} from "@mui/material";


const Skill = ({icon, name, score}) => {

    return(
        <Box gap='1.5rem' sx={{
            display: 'flex',
            flexDirection: 'row'
            
        }}>
            
                <Box sx={{
                    display: 'flex',
                    backgroundColor: '#333333',
                    width: '4rem',
                    height: '4rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '0.5rem'
                }}>
                {icon}
                </Box>
                <Box display='flex' flexDirection='column' width='100%'>

                <Typography variant='h6'>{name}</Typography>

                <Box sx={{
                        backgroundColor: '#333333',
                        height: '10px',
                        width: '80%',
                        position: 'relative'
                    }}>
                        <Box sx={{
                            backgroundColor: 'lightblue',
                            zIndex: '10',
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            width: `${score}`
                        }}>
    
                        </Box>
                </Box>
                </Box>
                
            

        </Box>
    )
};

export default Skill;