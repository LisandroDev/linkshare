import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Faq from './components/Faq.tsx';
import Join from './components/Join.tsx';
import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx';
import Resources from './components/Resources.tsx';

function Landing() {
  return (
    <>
      <Navbar />
      <main className='h-fit flex flex-col  gap-y-28'>
        <Hero />
        <Features />
        <Faq />
        <Resources />
        <Join />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
