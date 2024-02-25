import React, { useState } from 'react';
import { close, logo, menu, youtube, tiktok, facebook } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedNav, setSelectedNav] = useState(null);

  const handleNavClick = (id) => {
    setToggle(false);
    setSelectedNav(id);

    if (id === 'stats') {
      window.open('http://194.163.150.118:7010/#/', '_blank');
    }
  };

  const openYouTubeTab = () => {
    window.open('https://www.youtube.com/@hlltvpolska1430', '_blank');
  };

  const openTikTokTab = () => {
    window.open('https://www.tiktok.com/@nzn_serwer', '_blank');
  };

  const openFacebookTab = () => {
    window.open('https://www.facebook.com/profile.php?id=100076869772469', '_blank');
  };

  return (
    <nav className='w-full flex py-4 justify-between items-center navbar'>
      <img src={logo} alt='logo' className='w-[90px] h-[90px]' />
      {/* <img src={youtube} className='h-[64px] w-[96px] m-5 cursor-pointer' onClick={openYouTubeTab} />
      <img src={tiktok} className='h-[64px] w-[64px] m-5 cursor-pointer' onClick={openTikTokTab} />
      <img src={facebook} className='h-[55px] w-[55px] m-5 cursor-pointer' onClick={openFacebookTab} /> */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`
            font-poppins
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

      {/*Mobile list*/}
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
