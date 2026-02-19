import React from "react";
import { Avatar, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectCard = ({
    imageSrc,
    name,
    title,
    description,
    link
}) => {
    return (

        <div style={ styles.container }>
            <div style={ styles.container }>
            <div>
                <Avatar src={imageSrc} sx={ styles.icon }/>
            </div>
            <div>
                <Typography align='center' sx={{ fontWeight: 'bold' }}>
                {name}
                </Typography>
                <Typography align='center'>
                {title}
                </Typography>
                <Typography align='center'>
                {description}
                </Typography>
            </div>
            <div>
                <Button 
                variant='outlined' 
                startIcon={ <GitHubIcon /> }
                href={link}
                sx={ styles.button }
                >
                GITHUB
                </Button>
            </div>
            </div>
        </div>
    );
};

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