import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Page2 from './components/Page2';
import HomePage from './components/HomePage';
import MathGrade11 from './components/MathGrade11';
import PhysicsGrade11 from './components/PhysicsGrade11';
import TechnologyGrade11 from './components/TechnologyGrade11';
import MathGrade12 from './components/MathGrade12';
import PhysicsGrade12 from './components/PhysicsGrade12';
import TechnologyGrade12 from './components/TechnologyGrade12';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import DashboardPage from './components/DashboardPage';
import SubjectsPage from './components/SubjectsPage';
import ChooseActionPage from './components/ChooseActionPage'; // Import the new ChooseActionPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/choose-action" element={<ChooseActionPage />} /> {/* Add the new route */}
        <Route path="/math-grade11" element={<MathGrade11 />} />
        <Route path='/physics-grade11' element={<PhysicsGrade11/>}/>
        <Route path='/technology-grade11' element={<TechnologyGrade11/>}/>
         <Route path="/math-grade12" element={<MathGrade12 />} />
         <Route path="/physics-grade12" element={<PhysicsGrade12 />} />
         <Route path="/technology-grade12" element={<TechnologyGrade12 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
