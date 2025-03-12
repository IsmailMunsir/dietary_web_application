import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home';
import HealthForm from './components/HealthForm';
import ChoosePlan from './pages/ChoosePlan'; // Import the ChoosePlan component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/health-form" element={<HealthForm />} />
            <Route path="/choose-plan" element={<ChoosePlan />} /> {/* Add ChoosePlan route */}
            <Route path="/" element={<Home />} /> {/* Default route */}
          </Routes>
        </div>
        <Footer />
        <ToastContainer /> {/* Add this line for toast notifications */}
      </div>
    </Router>
  );
};

export default App;