//TODO: Add post to /register endpoint

function RegisterForm() {
  return (
    <>
      <form className='text-base flex flex-col max-w-sm font-semibold   [&>*]:flex  [&>*]:flex-col  [&>*]:mt-4 border rounded-md p-8'>
        <fieldset>
          <label>Username</label>
          <input
            type='text'
            placeholder='Username'
            className='text-center w-[99%] border rounded-sm py-2'
            name='username'
          />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email'
            className='text-center w-[99%] border rounded-sm py-2'
            name='email'
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
        <fieldset>
          <label> Repeat Password</label>
          <input
            type='password'
            className='text-center w-[99%] border rounded-sm py-2'
            placeholder='Repeat Password'
            name='repeat password'
          />
        </fieldset>
        <button className='w-full bg-[#556BDA] p-4 rounded-md text-white flex items-center font-bold text-base'>
          Submit
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
