import React, { useState } from 'react';
import Aside from '../components/aside';
import Header from '../components/header';

const dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  return (
    <main
      className={`grid ${open ? 'grid-cols-[auto_1fr]' : 'grid-cols-[1fr]'} `}
    >
      {open && <Aside />}

      <div>
        <Header toggle={toggle} />
        <div className='w-[90%] mx-auto my-12 py-8 px-10 bg-white rounded-lg shadow-sm hover:shadow-lg transition ease-in-out'>
          <form>
            <h4 className='text-2xl mb-3 text-[#102a43]'>search form</h4>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-y-8 gap-x-4'>
              <div className='flex flex-col mb-0'>
                <label
                  htmlFor='search'
                  className='mb-2 capitalize text-[#102a43]'
                >
                  Search
                </label>
                <input className='bg-[#f0f4f8] rounded-md border border-[#bcccdc] border-solid h-[35px] w-full' />
              </div>
              <div className='flex flex-col mb-0'>
                <label
                  htmlFor='search'
                  className='mb-2 capitalize text-[#102a43]'
                >
                  Status
                </label>
                <select
                  name=''
                  id=''
                  className='bg-[#f0f4f8] rounded-md border border-[#bcccdc] border-solid h-[35px] w-full'
                >
                  <option value='all'>All</option>
                  <option value='interview'>Interview</option>
                  <option value='declined'>Declined</option>
                </select>
              </div>
              <div className='flex flex-col mb-0'>
                <label
                  htmlFor='search'
                  className='mb-2 capitalize text-[#102a43]'
                >
                  Type
                </label>
                <select
                  name=''
                  id=''
                  className='bg-[#f0f4f8] rounded-md border border-[#bcccdc] border-solid h-[35px] w-full'
                >
                  <option value='all'>All</option>
                  <option value='interview'>Full-time</option>
                  <option value='declined'>Part-time</option>
                  <option value='declined'>Remote</option>
                  <option value='declined'>Internship</option>
                </select>
              </div>
              <div className='flex flex-col mb-0'>
                <label
                  htmlFor='search'
                  className='mb-2 capitalize text-[#102a43]'
                >
                  Sort
                </label>
                <select
                  name=''
                  id=''
                  className='bg-[#f0f4f8] rounded-md border border-[#bcccdc] border-solid h-[35px] w-full'
                >
                  <option value='all'>latest</option>
                  <option value='interview'>oldest</option>
                  <option value='declined'>a-z</option>
                  <option value='declined'>z-a</option>
                </select>
              </div>
              <button className='flex mb-0 bg-red-300 hover:bg-red-900 hover:text-white py-4 px-10 justify-center items-center h-9 rounded-md self-end text-red-900'>
                clear filter
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default dashboard;
