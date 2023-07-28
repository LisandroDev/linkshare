function LoginForm() {
    return (
      <>
        <form className='text-base flex flex-col max-w-sm font-semibold   [&>*]:flex  [&>*]:flex-col  [&>*]:mt-4 border rounded-md p-8'>
          <fieldset>
            <label>Username or email</label>
            <input
              type='text'
              placeholder='Username or email'
              className='text-center w-[99%] border rounded-sm py-2'
              name='username'
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              type='password'
              className='text-center w-[99%] border rounded-sm py-2'
              placeholder='Password'
              name='password'
            />
          </fieldset>
          <button className='w-full bg-[#556BDA] p-4 rounded-md text-white flex items-center font-bold text-base'>
            Submit
          </button>
        </form>
      </>
    );
  }
  
  export default LoginForm;