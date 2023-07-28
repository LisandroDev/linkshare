import { m } from 'framer-motion';

function Join() {
  return (
    <m.div initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1, transition:{duration: 1}}} className='flex flex-col m-4 gap-y-4 items-center text-center'>
      <p className="text-3xl flex flex-col sm:flex-row gap-x-3">
        <span className='text-[#7d3ef1]  font-semibold'>Join now !</span> It's
        totally free.
      </p>
      <button className="bg-[#556BDA]  text-white font-bold p-4 rounded-md">Sign Up</button>
    </m.div>
  );
}

export default Join;
