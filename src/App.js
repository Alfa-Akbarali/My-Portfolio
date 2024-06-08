import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Error from "./components/error/ErorrPage";
import Resume from "./components/resume/Resume";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </Router>
  );
}

export default App;