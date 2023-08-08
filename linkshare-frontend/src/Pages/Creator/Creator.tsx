import Mockup from './components/Mockup/Mockup.tsx';
import Customize from './components/Customize.tsx';
import Logo from '../../components/Logo.tsx';

function Creator() {
  return (
    <div className='h-screen bg-[#FAFAFA] md:overflow-hidden'>

      <div className=' h-[6%] bg-[#556BDA]  shadow-lg rounded-lg m-4 flex items-center p-2'><Logo /></div>
      <div className='bg-[#FAFAFA] w-screen md:h-[90%]  flex flex-col  md:flex-row  '>
        <Mockup />
        <Customize />
      </div>
    </div>

  );
}

export default Creator;
