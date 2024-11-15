import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router,Routes, Route, Switch} from 'react-router-dom';
import BookInfoPage from './Pages/BookInfoPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/info" element={<BookInfoPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
