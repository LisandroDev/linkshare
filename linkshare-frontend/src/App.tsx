import { LazyMotion, domAnimation } from 'framer-motion';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing.tsx';
import Register from './Pages/Register/Register.tsx';
import Creator from './Pages/Creator/Creator.tsx';
import Login from './Pages/Login/Login.tsx';


function App() {
  return (
    <>
        <LazyMotion features={domAnimation}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/creator" element={<Creator />} />
          </Routes>
        </LazyMotion>
    </>
  );
}

export default App;
