import React from 'react'
import * as constants from '../constants';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Art() {
  return (
    <div style={ styles.container }>
      <ImageList sx={{ width: 500, height: 500 }}  cols={3} rowHeight={200}>
        {constants.imgData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={ item.img }
              srcSet={ item.img }
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',
    margin: '2vh'
  }
}