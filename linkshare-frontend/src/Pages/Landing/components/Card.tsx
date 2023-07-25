import { m } from 'framer-motion';
import { IconType } from 'react-icons';

interface CardProps {
  icon: IconType;
  title: string;
  description: string;
}

function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <m.div
      initial={{ opacity: 0, x: 120 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
      className='flex p-4 gap-4 h-fit border-black flex-col text-left w-fit lg:w-1/5'
    >
      <Icon size={26} />
      <h1 className=' text-[22px] font-semibold'>{title}</h1>
      <p className=' text-base text-[#767B99] '>{description}</p>
    </m.div>
  );
}

export default Card;
