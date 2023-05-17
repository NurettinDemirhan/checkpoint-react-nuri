import React  from 'react';
import "./App.css"
import BlogPage from './BlogPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import  { useState, useCallback } from 'react';
import BlogEntry from './BlogEntry';

function App() {
 

  return (
    <div>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogPage />} />          
          <Route path="/entry/:id" element={<BlogEntry />} />
        </Routes>
      </div>
    </Router>
      
    </div>
  );
}

export default App;

