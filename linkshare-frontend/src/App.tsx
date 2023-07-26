import { LazyMotion, domAnimation } from 'framer-motion';
import './App.css';
import Landing from './Pages/Landing/Landing.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <>
      <Navbar />
      <LazyMotion features={domAnimation}>
        <Landing />
      </LazyMotion>
      <Footer />
    </>
  );
}

export default App;
