import phonesImage from '../../../assets/phonesimage.png';
import { m } from 'framer-motion';

function Faq() {
  return (
    <m.section
      className='flex flex-col gap-14 lg:items-center lg:flex-row'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      viewport={{ once: true }}
    >
      <div className='w-full bg-[#556BDA] lg:w-[78vw]'>
        <img
          src={phonesImage}
          className='w-full   md:w-[65vw]'
          alt=''
        />
      </div>
      <div className='flex ml-8 flex-col gap-8'>
        <div>
          <h1 className='text-4xl font-bold  text-black lg:text-4xl'>
            Start Engaging With Your Audience!
          </h1>
          <div
            className='bg-[#7d3ef1] mt-4 h-[1px] '
            style={{
              background:
                'linear-gradient(90deg, rgba(125,62,241,1) 0%, rgba(9,9,121,0) 100%)',
            }}
          />
        </div>

        <p className='text-base text-[#767B99] '>
          Simplify access to all your content in one place, Enhance engagement
          and empower your audience with seamless navigation. 🚀
        </p>
      </div>
    </m.section>
  );
}

export default Faq;
