import React from 'react';
import { Link } from 'react-router-dom';
const header = ({ toggle }) => {
  return (
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
  );
};

export default header;
