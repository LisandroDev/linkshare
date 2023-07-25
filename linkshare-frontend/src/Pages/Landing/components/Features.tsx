import Card from './Card';
import {
  BsDiagram3,
  BsReverseLayoutTextSidebarReverse as Layout,
  BsPersonVideo2 as Videos,
} from 'react-icons/bs';

function Features() {
  return (
    <div className='flex flex-col  m-8 gap-8'>
        <h1 className='text-3xl font-semibold place-self-center'>
          Features{' '}
          <div
            className='bg-[#7d3ef1]  h-[0.5px] '
            style={{
              background:
                'linear-gradient(90deg, rgba(125,62,241,1) 0%, rgba(9,9,121,0) 100%)',
            }}
          />
        </h1>
      <div className='flex flex-col items-center lg:flex-row lg:justify-center'>
        <Card
          icon={BsDiagram3}
          title='Organize by categories'
          description='Foster an exceptional viewing experience by organizing your links into personalized  categories. '
        />
        <Card
          icon={Layout}
          title='Build your custom theme'
          description='Bring your link page to life with custom or pre-defined colors and layouts. Your page, your way.'
        />
        <Card
          icon={Videos}
          title='Showcase your videos'
          description='Share your videos, your YouTube, Twitch, Vimeo channel, and bring your audience closer to you.'
        />
      </div>
    </div>
  );
}

export default Features;
