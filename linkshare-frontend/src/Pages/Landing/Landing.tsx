import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Faq from './components/Faq.tsx';
import Join from './components/Join.tsx';
import Resources from './components/Resources.tsx';

function Landing() {
  return (
      <main className='h-fit flex flex-col  gap-y-28'>
        <Hero />
        <Features />
        <Faq />
        <Resources />
        <Join />
      </main>
  );
}

export default Landing;
