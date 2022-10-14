import React from 'react';

const card = () => {
  return (
    <div className=' rounded bg-white shadow-lg'>
      <div className='p-4 flex items-center justify-start gap-x-8'>
        <div className='w-16 h-16 bg-[#2cb1bc] rounded-md flex justify-center items-center text-2xl font-bold capitalize text-white'>
          {'mwafrika'.slice(0, 1)}
        </div>
        <div>
          <h3 className='text-[#102a43] font-bold'> Senior developer</h3>
          <h3 className='text-slate-600 font-semibold'>Andela</h3>
        </div>
      </div>
      <div className='h-[1px] bg-slate-300 mb-4'></div>
      <div className='p-4 flex justify-between w-[90%]'>
        <div className='flex flex-col gap-y-3'>
          <div className='flex flex-row gap-x-2 items-center text-[#102a43] font-normal'>
            <img src='/location.svg' alt='location' className='w-5 h-5' />
            <h3>Oct 14th, 2022</h3>
          </div>

          <div className='flex flex-row gap-x-2 items-center text-[#102a43] font-normal'>
            <img src='/type.svg' alt='calendar' className='w-5 h-5' />
            <h3>Oct 14th, 2022</h3>
          </div>
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='flex flex-row gap-x-2 items-center text-[#102a43] font-normal'>
            <img src='/calendar.svg' alt='calendar' className='w-5 h-5' />
            <h3>Oct 14th, 2022</h3>
          </div>

          <span className='bg-blue-300 w-[5rem] flex items-center justify-center text-blue-900 px-4 rounded-lg hover:text-white hover:bg-blue-900 capitalize'>
            interview
          </span>
        </div>
      </div>
      <div className='p-4 flex gap-x-4'>
        <button className='bg-green-300 text-green-900 px-4 py-1 rounded-lg hover:text-white hover:bg-green-900'>
          edit
        </button>
        <button className='bg-red-300 text-red-900 px-4 py-1 rounded-lg hover:text-white hover:bg-red-900'>
          delete
        </button>
      </div>
    </div>
  );
};

export default card;
