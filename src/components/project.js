import React from 'react'
import { Avatar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import rpsIcon from '../assets/icons/icon1.png';
import mtgIcon from '../assets/icons/icon2.png';
import plantIcon from '../assets/icons/icon3.png';
import webIcon from '../assets/icons/icon4.png';

export default function Project() {
  return (
    <div>
      <div style={ styles.container }>
        <div style={ styles.container }>
          <div>
            <Avatar src={plantIcon} sx={ styles.icon }/>
          </div>
          <div>
            <Typography align='center' sx={{ fontWeight: 'bold' }}>
              I WET MY PLANTS
            </Typography>
            <Typography align='center'>
              NwHacks 2023 Top 15
            </Typography>
            <Typography align='center'>
              Plant care android app with soil moisture sensor
            </Typography>
          </div>
          <div>
            <Button 
              variant='outlined' 
              startIcon={ <GitHubIcon /> }
              href='https://github.com/xfsherry/nwhacks2023'
              sx={ styles.button }
            >
              GITHUB
            </Button>
          </div>
        </div>
      </div>

      <div style={ styles.container }>
        <div style={ styles.container }>
          <div>
            <Avatar src={webIcon} sx={ styles.icon }/>
          </div>
          <div>
            <Typography align='center' sx={{ fontWeight: 'bold' }}>
              CS JOB SEARCH
            </Typography>
            <Typography align='center'>
              Website that gathers relevant cs jobs in one place
            </Typography>
          </div>
          <div>
            <Button 
              variant='outlined' 
              startIcon={ <GitHubIcon /> }
              href='https://github.com/xfsherry/CS-Students-Job-Searching-App'
              sx={ styles.button }
            >
              GITHUB
            </Button>
          </div>
        </div>
      </div>

      <div style={ styles.container }>
        <div style={ styles.container }>
          <div>
            <Avatar src={rpsIcon} sx={ styles.icon }/>
          </div>
          <div>
            <Typography align='center' sx={{ fontWeight: 'bold' }}>
              ROCK PAPER SCISSORS
            </Typography>
            <Typography align='center'>
              2 player rock paper scissors game
            </Typography>
          </div>
          <div>
            <Button 
              variant='outlined' 
              startIcon={ <GitHubIcon /> }
              href='https://github.com/xfsherry/rockpaperscissors'
              sx={ styles.button }
            >
              GITHUB
            </Button>
          </div>
        </div>
      </div>

      <div style={ styles.container }>
        <div style={ styles.container }>
          <div>
            <Avatar src={mtgIcon} sx={ styles.icon } />
          </div>
          <div>
            <Typography align='center' sx={{ fontWeight: 'bold' }}>
              MTG LIFECOUNTER
            </Typography>
            <Typography align='center'>
              Magic The Gathering life counter android app
            </Typography>
          </div>
          <div>
            <Button 
              variant='outlined' 
              startIcon={ <GitHubIcon /> }
              href='https://github.com/xfsherry/lifecounter'
              sx={ styles.button }
            >
              GITHUB
            </Button>
          </div>
        </div>
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
    margin: '2vh',
    marginLeft: '4vh'
  },
  icon: {
    width: '10vh', 
    height: '10vh',
    marginRight: '2vh'
  }
}