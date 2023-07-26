import Logo from './Logo';

function Navbar() {
  return (
    <nav className=' p-8  lg:absolute sm:pb-24 bg-[#556BDA] w-full'>
      <div className='flex flex-col items-center gap-y-4  sm:flex-row sm:justify-between'>
        <Logo />
        <div className='flex gap-8 mr-4'>
          <button className="text-white font-semibold border rounded-md py-2 px-4 ">Log In</button>
          <button className='text-white font-semibold border rounded-md py-2 px-4'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
