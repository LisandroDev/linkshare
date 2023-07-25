import Logo from './Logo';

function Navbar() {
  return (
    <nav className=' p-8 bg-[#556BDA] w-full'>
      <div className='flex flex-col items-center gap-y-4 lg:justify-between lg:flex-row'>
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
