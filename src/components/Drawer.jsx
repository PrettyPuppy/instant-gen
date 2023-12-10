import React, { useContext } from 'react'
import { TypeContext } from '../contexts/TypeContext'
import { useNavigate } from 'react-router-dom'

const Drawer = () => {
  
  const { setType } = useContext(TypeContext);
  const navigate = useNavigate();

  const handleClickDrawer = (type) => {
    setType(type);
    navigate('/');
  }
  
  return (
    <div className="float-left">
      <div className='m-2 bg-[#1B1D2A] h-[calc(100vh-70px-1rem)] rounded-[5px] border-2 border-[#222436] w-[246px]'>
        <ul className="menu w-56 rounded-box pt-0">
          <li style={{marginLeft: -13}}>
            <details open>
              <summary className='border-2 border-[#222436] bg-[#131420] w-[246px] h-[63px] font-bold text-[18px] rounded-[5px] pt-5'>Funds</summary>
              <ul style={{marginLeft: -1}}>
                <li><a onClick={() => handleClickDrawer('review')} className='h-[59px] w-[236px] bg-[#262732] rounded-[5px] mt-2 hover:bg-[#404562] pt-5'>Review Translation</a></li>
                <li><a onClick={() => handleClickDrawer('generate')} className='h-[59px] w-[236px] bg-[#262732] rounded-[5px] mt-2 hover:bg-[#404562] pt-5'>Generate Translation</a></li>
                <li><a onClick={() => handleClickDrawer('update')} className='h-[59px] w-[236px] bg-[#262732] rounded-[5px] mt-2 hover:bg-[#404562] pt-5'>Update Translation</a></li>
              </ul>
            </details>
            <details open>
              <summary className='border-2 border-[#222436] bg-[#131420] w-[246px] h-[63px] font-bold text-[18px] rounded-[5px] mt-2 pt-5'>Property</summary>
              <ul style={{marginLeft: -1}}>
                <li><a onClick={() => handleClickDrawer('generate')} className='h-[59px] w-[236px] bg-[#262732] rounded-[5px] mt-2 hover:bg-[#404562] pt-5'>Generate Translation</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer