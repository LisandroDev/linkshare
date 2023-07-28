import './Login.styles.css';
import girlImage from '../../assets/girl.png';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <main className='flex flex-col lg:flex-row h-screen w-screen text-3xl'>
      <div
        id='background'
        className='flex justify-center items-center w-screen h-1/2 lg:h-screen lg:w-1/2'
      >
        <div className='text-white max-w-sm text-center'>
          <p className=' text-lg lg:text-4xl tracking-wider	  font-bold'>
            Login into your account!
          </p>
          <p className=' text-sm lg:max-w-md mt-4 lg:text-lg'>
            Discover the incredible benefits of our service , it's completely
            free! unlock the full potential of your online presence with our
            free and easy-to-use service.
          </p>
        </div>
      </div>
      <img
        src={girlImage}
        className='hidden lg:block lg:absolute  lg:left-1/2 lg:transform lg:-translate-x-1/2  lg:h-1/2  lg:bottom-0 '
      />
      <div className='lg:w-1/2 order-first lg:order-last py-4 flex items-center justify-center '>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
