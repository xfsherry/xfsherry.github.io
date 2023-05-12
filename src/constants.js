import { createTheme } from '@mui/material/styles'; 
import img1 from './assets/art/img1.jpg';
import img2 from './assets/art/img2.jpg';
import img3 from './assets/art/img3.jpg';
import img4 from './assets/art/img4.png';
import img5 from './assets/art/img5.png';
import img6 from './assets/art/img6.png';

//color scheme
export const NAVY_BLUE = "#22223b";
export const BLUE = "#4a4e69";
export const LAVENDER = "#9a8c98";
export const BEIGE = "#c9ada7";
export const SHELL = "#f2e9e4";

export const THEME = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto Mono'
    }
  },
  palette: {
    primary: {
        light: LAVENDER,
        main: BLUE,
        dark: NAVY_BLUE
    },
    secondary: {
        light: SHELL,
        main: BEIGE
    }
  }
})

export const imgData = [
  {
    img: img1,
    title: 'nonutnov1'
  },
  {
    img: img2,
    title: 'nonutnov2'
  },
  {
    img: img3,
    title: 'nonutnov3'
  },
  {
    img: img4,
    title: 'colorfulsquiggles'
  },
  {
    img: img6,
    title: 'lsd'
  },
  {
    img: img5,
    title: 'squiggles'
  }
]
