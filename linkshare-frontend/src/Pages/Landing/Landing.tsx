import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Faq from './components/Faq.tsx';
import Footer from '../../components/Footer.tsx';

function Landing() {
  return (
      <main className='h-fit flex flex-col  gap-y-28'>
        <Hero />
        <Features />
        <Faq />
      </main>
  );
}

export default Landing;
