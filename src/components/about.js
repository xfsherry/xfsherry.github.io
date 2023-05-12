import { Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from '../assets/resume.pdf';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

export default function About() {
  return (
    <div>
      <div style={ styles.container }>
        <div>
          <Typography align='center'>
            My name's Sherry. 
          </Typography>
          <Typography align='center'>
            I'm a student at University of British Columbia majoring in Computer Science and trying to navigate my way through the adult world.
          </Typography>
          <Typography align='center'>
            I love to paint and draw and that's what drew me to computer science initially. The idea of being able to create something and have other people enjoy it as well,
            which is what most of my apps are, just silly little things I make for myself or friends.
          </Typography>
          <Typography align='center'>
            I also enjoy choking full combos on Taiko and Sound Voltex.
          </Typography>
        </div>
      </div>
      <div style={ styles.container }>
        <Button 
          variant='outlined' 
          startIcon={ <DescriptionTwoToneIcon /> }
          href={ resume }
          sx={ styles.button }
        >
          RESUME
        </Button>

        <Button 
          variant='outlined' 
          startIcon={ <GitHubIcon /> }
          href='https://github.com/xfsherry'
          sx={ styles.button }
        >
          GITHUB
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',
    margin: '2vh'
  },
  button: {
    margin: '2vh'
  }
}
