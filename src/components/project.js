import React from 'react'
import rpsIcon from '../assets/icons/icon1.png';
import mtgIcon from '../assets/icons/icon2.png';
import plantIcon from '../assets/icons/icon3.png';
import webIcon from '../assets/icons/icon4.png';
import { ProjectCard } from './ProjectCard';

export default function Project() {
  return (
    <div>
      <ProjectCard
        imageSrc={plantIcon}
        name='I WET MY PLANTS'
        title='NwHacks 2023 Top 15'
        description='Plant care android app with soil moisture sensor'
        link='https://github.com/xfsherry/nwhacks2023'
      />

      <ProjectCard
        imageSrc={webIcon}
        name='CS JOB SEARCH'
        title='Personal Project'
        description='Website that gathers relevant cs jobs in one place'
        link='https://github.com/xfsherry/CS-Students-Job-Searching-App'
      />

      <ProjectCard
        imageSrc={rpsIcon}
        name='ROCK PAPER SCISSORS'
        title='2 player rock paper scissors game'
        description='A simple rock paper scissors game for two players'
        link='https://github.com/xfsherry/rockpaperscissors'
      />

      <ProjectCard
        imageSrc={mtgIcon}
        name='MTG LIFECOUNTER'
        title='Magic The Gathering life counter android app'
        description='An android app for tracking life totals in Magic The Gathering'
        link='https://github.com/xfsherry/lifecounter'
      />
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