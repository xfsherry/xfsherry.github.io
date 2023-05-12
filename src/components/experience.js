import React from 'react'
import { Avatar, Typography } from '@mui/material';
import alidaIcon from '../assets/icons/icon5.png';
import airIcon from '../assets/icons/icon6.png';
import neroIcon from '../assets/icons/icon7.png';
import nwIcon from '../assets/icons/icon8.png';

export default function Experience() {

  return (
    <div>
      <div style={ styles.container }>
        <Typography align='center' sx={{ fontWeight: 'bold' }}>
          Work
        </Typography>
      </div>

      <div style={ styles.container }>
        <div>
          <Avatar src={alidaIcon} sx={ styles.icon }/>
        </div>

        <div>
          <Typography 
            align='center' 
            sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
          >
            Alida
          </Typography>
          <Typography align='center' sx={{ fontStyle: 'italic' }}>
            Software Development Coop
          </Typography>
          <Typography align='center'>
            Created several RESTful API endpoints utilizing Node.js along with unit tests using Mocha
          </Typography>
          <Typography align='center'>
            Worked on the Alida Sparq application in a collaborative Scrum/Agile environment
          </Typography>
          <Typography align='center'>
            Fixed multiple bugs on the front-end in React and the back-end in TypeScript
          </Typography>
        </div>

        <div style={ styles.date }>
          <Typography align='center'>
            Jan 2022
          </Typography>
          <Typography align='center'>
            Aug 2022
          </Typography>
        </div>
      </div>

      <div style={ styles.container }>
        <div>
          <Avatar src={airIcon} sx={ styles.icon }/>
        </div>

        <div>
          <Typography 
            align='center' 
            sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
          >
            Air Teach N Learn
          </Typography>
          <Typography align='center' sx={{ fontStyle: 'italic' }}>
            Software Developer Intern
          </Typography>
          <Typography align='center'>
            Assisted in implementing and maintaining the company’s database using Firebase
          </Typography>
          <Typography align='center'>
            Worked alongside a team of three to implement new features and maintain website with Angular
          </Typography>
        </div>

        <div style={ styles.date }>
          <Typography align='center'>
            Sept 2021
          </Typography>
          <Typography align='center'>
            Dec 2021
          </Typography>
        </div>
      </div>

      <div style={ styles.container }>
        <div>
          <Avatar src={neroIcon} sx={ styles.icon }/>
        </div>

        <div>
          <Typography 
            align='center' 
            sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
          >
            Nero Belgian Waffle Bar
          </Typography>
          <Typography align='center' sx={{ fontStyle: 'italic' }}>
            Team Leader
          </Typography>
          <Typography align='center'>
            Provided customer service for a popular high volume cafe and trained new staff
          </Typography>
          <Typography align='center'>
            Oversaw the opening and closing duties and delegated responsibility for the entire store
          </Typography>
        </div>

        <div style={ styles.date }>
          <Typography align='center'>
            July 2016
          </Typography>
          <Typography align='center'>
            Sept 2021
          </Typography>
        </div>
      </div>

      <div style={ styles.container }>
        <Typography align='center' sx={{ fontWeight: 'bold' }}>
          Volunteer
        </Typography>
      </div>

      <div style={ styles.container }>
        <div>
          <Avatar src={nwIcon} sx={ styles.icon }/>
        </div>

        <div>
          <Typography 
            align='center' 
            sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
          >
            NwHacks
          </Typography>
          <Typography align='center' sx={{ fontStyle: 'italic' }}>
            Volunteer Crew
          </Typography>
          <Typography align='center'>
            Oversaw the check-in and check-out of equipment inventory
          </Typography>
          <Typography align='center'>
            Helped with event closing and take down
          </Typography>
        </div>

        <div style={ styles.date }>
          <Typography align='center'>
            Jan 2020
          </Typography>
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
    margin: '2vh',
    marginBottom: '4vh'
  },
  date: {
    margin: '2vh',
    marginLeft: '4vh'
  },
  icon: {
    width: '10vh', 
    height: '10vh',
    marginRight: '2vh'
  }
}