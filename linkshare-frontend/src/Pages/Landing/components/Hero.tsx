import { m } from 'framer-motion';
import heroImage from '../../../assets/heroimage.png'

function Hero() {
  return (
    <section className='flex flex-col bg-[#556BDA] p-4 h-screen gap-y-12  justify-around lg:h-screen lg:gap-24 lg:flex-row '>
      <m.div
        initial={{ opacity: 0 }}
        viewport={{once: true}}
        whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
        className='flex  flex-col text-center gap-y-8 place-self-center'
      >
        <h1 className='text-4xl font-bold  text-[#FFFFFF] lg:text-6xl'>
          All your links in one place.
        </h1>
        <p className='text-xl text-white'>
          Share your links, videos and everything you want!
        </p>
      </m.div>
      <img
        src={heroImage}
        className='h-auto sm:h-[900px] place-self-center lg:place-self-end  bg-cover'
        alt=''
      />
    </section>
  );
}

export default Hero;
