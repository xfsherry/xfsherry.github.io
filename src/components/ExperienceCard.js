import React from "react";
import { Avatar, Typography } from "@mui/material";

export const ExperienceCard = ({
    imageSrc,
    companyName,
    role,
    responsibilities,
    startDate,
    endDate,
}) => {
    return (
        <div style={ styles.container }>
        <div>
          <Avatar src={imageSrc} sx={ styles.icon }/>
        </div>

        <div>
          <Typography 
            align='center' 
            sx={{ fontWeight: 'bold', fontStyle: 'italic'}}
          >
            {companyName}
          </Typography>
          <Typography align='center' sx={{ fontStyle: 'italic' }}>
            {role}
          </Typography>

          {responsibilities.map((resp, index) => (
            <Typography key={index} align='center'>
              {resp}
            </Typography>
          ))}
        </div>

        <div style={ styles.date }>
          <Typography align='center'>
            {startDate}
          </Typography>
          <Typography align='center'>
            {endDate}
          </Typography>
        </div>
      </div>
    );
};

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