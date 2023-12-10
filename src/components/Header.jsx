import React from 'react'

const Header = () => {
  return (
    <div className="navbar bg-[#0C0E1A] h-[80px] border-b-[1.5px] border-[#36363C]">
      <div className="flex-none">
        <div className="btn btn-circle btn-ghost bg-[#1E233F] text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </div>
      <div className="flex-1">
        <a className="text-2xl ml-5 text-white" style={{ fontFamily: 'Michroma' }}>SDXL Turbo</a>
        <a className="ml-10 mt-2 text-white cursor-pointer hover:text-blue-300">Home</a>
        <a className="ml-5 mt-2 text-white cursor-pointer hover:text-blue-300">How to Use</a>
        <a className="ml-5 mt-2 text-white cursor-pointer hover:text-blue-300">Introduction</a>
        <a className="ml-5 mt-2 text-white cursor-pointer hover:text-blue-300">Contact</a>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end mr-5">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://lh3.googleusercontent.com/a/ACg8ocKFk17COdJJYj9PmGWMLfp3AokWBb-svjt0FFRx82dHHvg=s288-c-no" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header