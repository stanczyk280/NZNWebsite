import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedNav, setSelectedNav] = useState(null);

  const handleNavClick = (id) => {
    setToggle(false);
    setSelectedNav(id);
  };

  return (
    <nav className='w-full flex py-4 justify-between items-center navbar'>
      <img src={logo} alt='logo' className='w-[140px] h-[140px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`
            font-optima
            font-normal 
            cursor-pointer 
            text-[24px] 
            ${selectedNav === nav.id ? 'text-marigold' : 'text-white'
              } ${navLinks.indexOf(nav) === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`} onClick={() => handleNavClick(nav.id)}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} 
          p-6 bg-black-gradient
          absolute top-20 right-0 mx-4 
          my-20 min-w[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`
                font-optima 
                font-normal 
                cursor-pointer 
                text-[16px] 
                ${selectedNav === nav.id ? 'text-marigold' : 'text-white'}
                ${navLinks.indexOf(nav) === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`} onClick={() => handleNavClick(nav.id)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
