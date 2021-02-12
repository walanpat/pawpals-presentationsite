import * as React from 'react';
import '../styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Team from '../components/Team';
import PawPals from '../components/PawPals'
import Project from '../components/Project'
// markup

const IndexPage = () => {
  return (
    <main>
      <title>Paw Pals</title>
      <h1>Paw Pals Image</h1>
      <Router>
        <NavBar />
        <Route path='/pawpals' exact component={() => <PawPals/>} />
        <Route path='/projects' exact component={() => <Project/>} />
        <Route path='/team' exact component={() => <Team/>} />
        <Route path='/journal' exact component={() => <div>Test4</div>} />
        <Route path='/deliverables' exact component={() => <div>Test5</div>} />
      </Router>
    </main>
  );
};

export default IndexPage;
