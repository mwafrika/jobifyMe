import React, { useState } from 'react';
import Chart from '../components/chart';
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
