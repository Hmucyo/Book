// import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import BookInfoPage from './Pages/BookInfoPage';
import Chat from './Pages/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<BookInfoPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
