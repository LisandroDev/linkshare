import { m } from 'framer-motion';
import { AiOutlineCheck } from 'react-icons/ai';

interface ResourcesProps {
  description: string;
  fadeInFrom?: 'RIGHT' | 'LEFT';
}

function ResourcesCard({ description }: ResourcesProps) {
  return (
    <m.div
      initial={{ opacity: 0, x: 120 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 1 },
      }}
      className='flex  gap-4 text-center items-center bg-[#F2F0FE] rounded-md px-10 py-2  box-border'
    >
      <div className='border bg-[hsl(248,94%,69%)]  bg-opacity-40 rounded-full w-5 h-5 flex items-center border-[#7966FA]'>
        <AiOutlineCheck className=' fill-[#7966FA]' />
      </div>
      <p>{description}</p>
    </m.div>
  );
}

export default ResourcesCard;
