import React from 'react'
import { Typography } from '@mui/material';
import alidaIcon from '../assets/icons/icon5.png';
import airIcon from '../assets/icons/icon6.png';
import neroIcon from '../assets/icons/icon7.png';
import nwIcon from '../assets/icons/icon8.png';
import { ExperienceCard } from './ExperienceCard';

export default function Experience() {

  return (
    <div>
      <div style={ styles.container }>
        <Typography align='center' sx={{ fontWeight: 'bold' }}>
          Work
        </Typography>
      </div>

      <ExperienceCard 
        imageSrc={alidaIcon}
        companyName="Alida"
        role="Software Development Coop"
        responsibilities={[
          "Created several RESTful API endpoints utilizing Node.js along with unit tests using Mocha",
          "Worked on the Alida Sparq application in a collaborative Scrum/Agile environment",
          "Fixed multiple bugs on the front-end in React and the back-end in TypeScript"
        ]}
        startDate="Jan 2022"
        endDate="Aug 2022"
      />

      <ExperienceCard 
        imageSrc={airIcon}
        companyName="Air Teach N Learn"
        role="Software Developer Intern"
        responsibilities={[
          "Assisted in implementing and maintaining the company’s database using Firebase",
          "Worked alongside a team of three to implement new features and maintain website with Angular"
        ]}
        startDate="Sept 2021"
        endDate="Dec 2021"
      />

      <ExperienceCard 
        imageSrc={neroIcon}
        companyName="Nero Belgian Waffle Bar"
        role="Team Leader"
        responsibilities={[
          "Provided customer service for a popular high volume cafe and trained new staff",
          "Oversaw the opening and closing duties and delegated responsibility for the entire store"
        ]}
        startDate="July 2016"
        endDate="Sept 2021"
      />


      <div style={ styles.container }>
        <Typography align='center' sx={{ fontWeight: 'bold' }}>
          Volunteer
        </Typography>
      </div>

      <ExperienceCard
        imageSrc={nwIcon}
        companyName="NwHacks"
        role="Volunteer Crew"
        responsibilities={[
          "Oversaw the check-in and check-out of equipment inventory",
          "Helped with event closing and take down"
        ]}
        startDate="Jan 2020"
      /> 
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