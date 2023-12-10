import React, { useContext, useEffect, useRef, useState } from 'react'

const HomeView = () => {

  const [result, setResult] = useState('Enter your prompt on the left.');

  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleChangeInput = debounce((event) => {
    console.log('>>> Prompt changed...', event.target.value);
    setResult(event.target.value);
  }, 500);

  return (
    <div className='flex justify-center'>
      <div className='mx-10 my-16'>

        <div className='p-14 rounded-[15px] w-[calc(100vw-2.5rem-3.5rem)] h-[calc(100vh-70px-2.5rem-7rem)] relative'>

          <div>
            <div className='flex flex-row gap-4'>

              <div className='flex-1 flex rounded-[5px] h-[calc(100vh-70px-20rem)]'>
                <div className='inline-block m-auto text-center text-white'>
                  <p className='text-7xl mt-8 font-extrabold text-purple-500'>Try SDXL Turbo!</p>
                  <p className='mt-4 text-slate-400'>Enter your prompt and wait for a second, let SDXL Turbo amaze you.</p>
                  <input className='mt-10 rounded-lg text-xl w-[500px] p-5' onChange={handleChangeInput} placeholder='Input anything that comes to your mind...' />
                </div>
              </div>

              <div className='flex-1 flex rounded-[5px] bg-[#1B1D2A] border-2 border-dashed border-[#36363C] hover:border-[#9191fe]'>
                <div className='inline-block m-auto text-center text-white'>
                  <p className='text-white'>{ result }</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeView