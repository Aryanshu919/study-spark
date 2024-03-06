import React from 'react'

const Navbar = () => {
  return (
    <div
    className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblue-700 transition-all duration-200`}
    >
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
         Logo
         <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
      
        </div>

    </div>   
  )
}

export default Navbar