import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Resume } from './components/Resume/Resume';

export default class App extends Component {
  static displayName = App.name;

    render () {
        return (
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/resume' element={<Resume/>} />
                </Routes>
            </Layout>
        );
    }
}
