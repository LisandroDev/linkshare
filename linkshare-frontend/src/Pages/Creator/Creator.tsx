import Mockup from './components/Mockup/Mockup.tsx';
import Customize from './components/Customize.tsx';

function Creator() {
  return (
    <div className='h-screen'>

      <h1 className=' h-[4%]'>Navbar</h1>
      <div className='bg-[#FAFAFA] w-screen md:h-[96%]  flex flex-col  md:flex-row  '>
        <Mockup />
        <Customize />
      </div>
    </div>

  );
}

export default Creator;
