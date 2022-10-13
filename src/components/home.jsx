import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <main className='block box-border min-h-screen'>
      <nav className='w-[90vw] max-w-[1120px] mx-auto my-0 h-[6rem] flex items-center'>
        <img src='/logo.png' alt='logo' className='w-[15rem]' />
      </nav>
      <section className='min-h-[calc(100vh-6rem)] grid items-center mt-[-3rem] w-[90vw] max-w-[1120px] my-0 mx-auto grid-cols-1 sm:grid-cols-[1fr_1fr] gap-x-[3rem]'>
        <div className=''>
          <h1 className='text-[#102a43] text-[3rem] mt-0 font-bold leading-[1.3] mb-[1.38rem] capitalize tracking-[1px]'>
            job <span className='text-[#2cb1bc]'>tracking</span> app
          </h1>
          <p className='mb-[1.5rem] max-w-[40em] leading-[1.75] text-[#486581]'>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link
            to='/login'
            className='text-[1.25rem] py-[0.5rem] px-[1.25rem] text-white bg-[#2cb1bc] border-transparent tracking-[1px] shadow-lg inline-block rounded-lg'
          >
            Register/Login
          </Link>
        </div>
        <img src='/job.svg' className='object-cover w-full hidden sm:flex' />
      </section>
    </main>
  );
};

export default home;
