import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import * as constants from '../constants'
import { Link, useLocation } from 'react-router-dom';
import me from '../assets/me1.png';

export default function Header() {
  const { pathname } = useLocation();
  var path = pathname.substring(1);

  const handleChange = (event, newValue) => {
    path = newValue;
  };

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        margin: "2vh"
      }}>
        <img src={me} alt="me" />
      </div>
      
      <Box sx={{ 
        backgroundColor: constants.SHELL,
        background: "linear-gradient(90deg, rgba(51,51,51,0) 0%, rgba(242,233,228,1) 50%, rgba(255,255,255,0) 100%)"
      }}>
        <Tabs
          value={path ? path : "about"}
          onChange={handleChange}
          sx={{
            ".Mui-selected": {
              color: constants.BLUE,
            },
          }}
          TabIndicatorProps={{ style: 
            { background: constants.BLUE } 
          }}
          aria-label="secondary tabs example"
          centered
        >
          <Tab value="about" label="About" component={Link} to={'/'} disableRipple />
          <Tab value="experience" label="Experience" component={Link} to={'/experience'} disableRipple />
          <Tab value="projects" label="Projects" component={Link} to={'/projects'} disableRipple />
          <Tab value="art" label="Art" component={Link} to={'/art'} disableRipple />
        </Tabs>
      </Box>
    </div>
  );
}
