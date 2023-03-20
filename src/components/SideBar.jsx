import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';


function SideBar() {

  const navigate = useNavigate();

  return (
    <List m='4rem 0'>
        {['Home', 'About', 'Skills', 'Resume', 'Projects', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton href={`#${text}`} sx={{
                '&:hover': {
                  color: '#d03bd8'
                }
              }}>
              <ListItemIcon>
                    {(text === 'Home') ? (<HomeIcon style={{ color: 'white' }}/>) : undefined}  
                    {(text === 'About') ? (<InfoIcon style={{ color: 'white' }}/>) : undefined}
                    {(text === 'Skills') ? (<CodeIcon style={{ color: 'white' }}/>) : undefined}
                    {(text === 'Resume') ? (<SchoolIcon style={{ color: 'white' }}/>) : undefined}
                    {(text === 'Projects') ? (<FolderIcon style={{ color: 'white' }}/>) : undefined}
                    {(text === 'Contact') ? (<AlternateEmailIcon style={{ color: 'white' }}/>) : undefined}
                
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  );
};

export default SideBar;