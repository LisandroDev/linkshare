import Logo from './Logo';

function Footer() {
  return (
    <footer className='flex  p-8 flex-col lg:flex-row lg:items-center  lg:justify-around bg-[#556BDA]'>
      <Logo />
      <p className='text-white '>
        © Linkvice {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
