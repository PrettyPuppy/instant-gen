import React, { useContext, useState, useEffect } from 'react'
import { TypeContext } from '../contexts/TypeContext'
import { Link } from 'react-router-dom';
import { PageContext } from '../contexts/PageContext';

const ResultView = () => {

  const { type } = useContext(TypeContext);
  const { setPage } = useContext(PageContext);

  const [title, setTitle] = useState();

  useEffect(() => {
    if (type == 'review') {
      setTitle('Review');
    } else if (type == 'generate') {
      setTitle('Generate');
    } else if (type == 'update') {
      setTitle('Update')
    }
  }, [type])

  return (
    <div className='mt-5 mx-7 flex'>
      <div className='m-auto'>
        <h3 className='text-white text-xl flex flex-row' style={{ fontFamily: 'Michroma' }}>
          <Link to={'/'} onClick={() => setPage('second')}><img className='mr-5 cursor-pointer' src='src\assets\icons\back.png' alt='back' /></Link>
          {title} Translation
        </h3>

        <div className="divider w-[calc(100vw-4rem)]"></div>

        <div className='flex flex-row gap-4'>
          <img src='src\assets\images\docs1.png' alt='docs' width={1250} className='h-[750px]' />
          <div className='w-[297px]'>
            <div className='text-[#FCFCFC]'>You have uploaded the following two documents for review. <br></br> Please check the review results on the left column.</div>
            <div className='grid grid-rows-2 gap-4 mt-4 mb-4'>
              <img src='src\assets\images\preview.png' alt='preview' />
              <img src='src\assets\images\preview.png' alt='preview' />
            </div>
            <details className="dropdown mt-5">
              <summary tabIndex={0} role="button" className="btn w-[297px] h-[37px] text-white font-normal bg-[#3371BC] hover:bg-[#2b507c]">
                Download
                
              </summary>
              <ul tabIndex={0} className="dropdown-content rounded-sm z-[1] menu shadow bg-white w-[297px] text-black mt-1">
                <li><button>Download As PDF</button></li>
                <li><button>Download As DOC</button></li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultView