import React from 'react';
import { Link } from 'react-router-dom';

const register = () => {
  return (
    <main className='grid min-h-screen items-center'>
      <form className=' max-w-[400px] w-[90vw] text-[#102043] bg-white mx-auto my-12 py-8 px-10 ease-in-out duration-300 shadow-lg border-t-[5px] border-[#2cb1bc] rounded-lg'>
        <img src='/logo-light.png' alt='logo' className='w-[15rem] mx-auto' />
        <h3 className='text-center text-[2rem]'>Login</h3>
        <div className='mb-6'>
          <label
            htmlFor='name'
            className='capitalize mb-2 tracking-[1px] leading-7'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            className='w-full h-[35px] px-[0.75rem] py-[0.375rem] rounded bg-[#f0f4f8] border border-[#bcccdc] border-solid text-[100%]'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='capitalize mb-2 tracking-[1px] leading-7'
          >
            email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            required
            className='w-full h-[35px] px-[0.75rem] py-[0.375rem] rounded bg-[#f0f4f8] border border-[#bcccdc] border-solid text-[100%]'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='capitalize mb-2 tracking-[1px] leading-7'
          >
            Password
          </label>
          <input
            name='password'
            id='password'
            type='password'
            className='w-full h-[35px] px-[0.75rem] py-[0.375rem] rounded bg-[#f0f4f8] border border-[#bcccdc] border-solid text-[100%]'
          />
        </div>
        <button
          type='submit'
          className='h-[35px] w-full flex mt-4 bg-[#2cb1bc] py-[0.375rem] px-[0.75rem] text-white border-transparent rounded justify-center shadow-lg'
        >
          Submit
        </button>
        <p className='mt-4 max-w-[40em] text-center'>
          Already a member?{' '}
          <span className='text-[#2cb1bc]'>
            <Link to='/login'>Login</Link>
          </span>
        </p>
      </form>
    </main>
  );
};

export default register;
