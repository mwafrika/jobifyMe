import React, { useState } from 'react';
import Chart from './chart';
import { Link } from 'react-router-dom';

const dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  return (
    <main
      className={`grid ${open ? 'grid-cols-[auto_1fr]' : 'grid-cols-[1fr]'} `}
    >
      {open && (
        <aside className='flex flex-col shadow-sm'>
          <div className='w-[250px] h-full min-h-screen bg-white ml-0 sticky transition-all ease-in-out duration-500'>
            <header className='h-[6rem] flex items-center'>
              <img
                src='/logo-light.png'
                alt='logo'
                className='border-none h-full'
              />
            </header>
            <ul className='pt-8 flex flex-col text-[#627d98]'>
              <li className='py-4 pr-0 pl-10'>
                <Link to='/'>
                  <span className='flex items-center gap-x-3'>
                    <img src='/stat.svg' alt='' className='w-6' />
                    <p>Statistics</p>
                  </span>
                </Link>
              </li>
              <li className='py-4 pr-0 pl-10'>
                <Link to='/'>
                  <span className='flex items-center gap-x-3'>
                    <img src='/all-jobs.svg' alt='all' className='w-6' />
                    <p>All Jobs</p>
                  </span>
                </Link>
              </li>
              <li className='py-4 pr-0 pl-10'>
                <Link to='/'>
                  <span className='flex items-center gap-x-3'>
                    <img src='/add-job.svg' alt='add' className='w-6' />
                    <p>Add Job</p>
                  </span>
                </Link>
              </li>
              <li className='py-4 pr-0 pl-10'>
                <Link to='/'>
                  <span className='flex items-center gap-x-3'>
                    <img src='/profile.svg' alt='profile' className='w-6' />
                    <p>Profile</p>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}

      <div>
        <nav className='flex sticky justify-center top-0 h-24 shadow-sm bg-white flex-col'>
          <div className='flex justify-between items-center w-[90%] mx-auto'>
            <button
              className='bg-transparent border-transparent flex items-center'
              type='button'
              onClick={toggle}
            >
              <img src='/toggle.svg' alt='toggle' />
            </button>
            <h3 className='text-2xl font-normal text-[#102a43] tracking-[1px]'>
              Dashboard
            </h3>
            <div className='flex justify-between items-center gap-x-3'>
              <img src='/avatar.svg' alt='avatar' />
              <span className='capitalize text-[#102a43]'>
                <h3>John Mufungizi</h3>
                <Link to='/login'>
                  <h3 className='underline'>(Logout)</h3>
                </Link>
              </span>
            </div>
          </div>
        </nav>
        <div className=' w-[90%] mx-auto my-0 py-8 px-0'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-8 gap-x-4'>
            <div className='p-8 rounded border-b-[5px] border-b-solid border-b-[rgb(233_185_73)] bg-white'>
              <div className='flex items-center justify-between'>
                <span className='text-[50px] text-[rgb(233_185_73)] font-bold flex'>
                  1
                </span>
                <span className='bg-[rgb(252_239_199)] w-[70px] h-[60px] rounded-md items-center flex justify-center'>
                  <img src='/pending.svg' alt='pending' />
                </span>
              </div>
              <p className='capitalize text-left mx-0 mt-1 mb-0 text-xl leading-6 font-normal text-[#102a43]'>
                pending status
              </p>
            </div>
            <div className='p-8 rounded border-b-[5px] border-b-solid border-b-[rgb(100_122_203)] bg-white'>
              <div className='flex items-center justify-between'>
                <span className='text-[50px] text-[rgb(100_122_203)] font-bold flex'>
                  3
                </span>
                <span className='bg-[rgb(224_232_249)] w-[70px] h-[60px] rounded-md items-center flex justify-center'>
                  <img src='/scheduled.svg' alt='scheduled' />
                </span>
              </div>
              <p className='capitalize text-left mx-0 mt-1 mb-0 text-xl leading-6 font-normal text-[#102a43]'>
                pending status
              </p>
            </div>
            <div className='p-8 rounded border-b-[5px] border-b-solid border-b-[rgb(214_106_106)] bg-white'>
              <div className='flex items-center justify-between'>
                <span className='text-[50px] text-[rgb(214_106_106)] font-bold flex'>
                  5
                </span>
                <span className='bg-[rgb(255_238_238)] w-[70px] h-[60px] rounded-md items-center flex justify-center'>
                  <img src='/declined.svg' alt='declined' />
                </span>
              </div>
              <p className='capitalize text-left mx-0 mt-1 mb-0 text-xl leading-6 font-normal text-[#102a43]'>
                pending status
              </p>
            </div>
          </div>
          <section className='mt-16 text-center capitalize'>
            <h3 className='mb-3 text-2xl text-[#102a43] font-normal'>
              monthly applications
            </h3>
            <button className='text-[#2cb1bc] bg-transparent text-xl leading-6'>
              area chart
            </button>
            <Chart />
          </section>
        </div>
      </div>
    </main>
  );
};

export default dashboard;
