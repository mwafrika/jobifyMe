import React from 'react';
import { Link } from 'react-router-dom';

const aside = () => {
  return (
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
            <Link to='/dashboard'>
              <span className='flex items-center gap-x-3'>
                <img src='/stat.svg' alt='' className='w-6' />
                <p>Statistics</p>
              </span>
            </Link>
          </li>
          <li className='py-4 pr-0 pl-10'>
            <Link to='/jobs'>
              <span className='flex items-center gap-x-3'>
                <img src='/all-jobs.svg' alt='all' className='w-6' />
                <p>All Jobs</p>
              </span>
            </Link>
          </li>
          <li className='py-4 pr-0 pl-10'>
            <Link to='/new'>
              <span className='flex items-center gap-x-3'>
                <img src='/add-job.svg' alt='add' className='w-6' />
                <p>Add Job</p>
              </span>
            </Link>
          </li>
          <li className='py-4 pr-0 pl-10'>
            <Link to='/profile'>
              <span className='flex items-center gap-x-3'>
                <img src='/profile.svg' alt='profile' className='w-6' />
                <p>Profile</p>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default aside;
