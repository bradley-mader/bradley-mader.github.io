import React from 'react';
import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Resume } from './components/Resume/Resume';
import { AboutMe } from './components/AboutMe/AboutMe';
import { CurriculumVitae } from './components/CurriculumVitae/CurriculumVitae';

const App = () => (
  <Layout>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/aboutme' element={<AboutMe />} />
      <Route path='/curriculum-vitae' element={<CurriculumVitae />} />
    </Routes>
  </Layout>
);

export default App;
