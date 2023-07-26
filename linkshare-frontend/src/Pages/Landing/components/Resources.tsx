import { m } from 'framer-motion';
import ResourcesCard from './ResourcesCard';

function Resources() {
  return (
    <div className='flex flex-col items-center'>
      <m.div
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className='h-36'
      >
        <div
          className='bg-[#7d3ef1]  w-36 h-[0.5px] -rotate-90 '
          style={{
            background:
              'linear-gradient(90deg, rgba(125,62,241,1) 0%, rgba(9,9,121,0) 100%)',
          }}
        />
      </m.div>
      <m.h1
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className='text-black font-bold  text-xl'
      >
        Everything you need
      </m.h1>
      <div className='flex mt-8 flex-col gap-y-8'>
        <ResourcesCard  description='Use custom icons'/>
        <ResourcesCard  description='All your social media in one place'/>
        <ResourcesCard  description='Use your custom color palette'/>
        <ResourcesCard  description='Register as many links as you want, without limits'/>
      </div>
    </div>
  );
}

export default Resources;
