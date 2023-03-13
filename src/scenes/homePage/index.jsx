import { 
    Box,
    Typography,
    CssBaseline
} from "@mui/material";
import Media from "components/Media";
import Photo from "components/Photo";
import SideBar from "components/SideBar";
import AboutWidget from "scenes/widgets/AboutWidget";
import ContactWidget from "scenes/widgets/ContactWidget";
import FooterWidget from "scenes/widgets/FooterWidget";
import HomeWidget from "scenes/widgets/HomeWidget";
import ProjectsWidget from "scenes/widgets/ProjectsWidget";
import SkillsWidget from "scenes/widgets/SkillsWidget";

const HomePage = () => {

    
    return (
        <Box sx={{ display: 'flex', height: '100vh',}}>
            <Box sx={{ 
            flexBasis: '15%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: '#1A1A1A',
            color: 'white'
            }}>
            <Photo />
            <SideBar />
            <Media />
            </Box>
            <Box sx={{ flexBasis: '85%', maxWidth: '85%', overflowX: 'hidden', color: 'white', position: 'relative',
            }}>
                <Box sx={{
                    background: 'black', 
                    opacity: '0.4',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    zIndex: '-1'
                }}/>
                
                    
                <HomeWidget/>
                <AboutWidget />
                <SkillsWidget />
                <ProjectsWidget />
                <ContactWidget />
                <FooterWidget />

                
            </Box>
        </Box>
    )

    
};

export default HomePage;