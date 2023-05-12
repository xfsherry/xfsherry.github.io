import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './about';
import Art from './art';
import Experience from './experience';
import Project from './project';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<About />}></Route>
      <Route exact path='/art' element={<Art />}></Route>
      <Route exact path='/experience' element={<Experience />}></Route>
      <Route exact path='/projects' element={<Project />}></Route>
    </Routes>
  );
}

export default Main;