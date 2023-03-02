import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { Blog } from './components/Blog';
import { Resume } from './components/Resume/Resume';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

    render () {
        return (
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/blog' element={<Blog/>} />
                    <Route path='/resume' element={<Resume/>} />
                </Routes>
            </Layout>
        );
    }
}
