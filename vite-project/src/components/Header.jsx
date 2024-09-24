import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const saveImage = () => {
    // Add save image functionality here
  };

  const downloadImage = () => {
    // Add download image functionality here
  };

  return (
    <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full'>
      <div className='flex justify-between px-10 items-center h-full'>
        <Link to='/'>
          <img
            src=''
            alt='FrameFusion'
          />
        </Link>
        <span className='text-xl text-white'>FrameFusion</span>
        <div className='flex justify-center items-center gap-2 text-gray-300 h-full'>
          <button
            onClick={saveImage}
            className='px-3 py-[6px] outline-none bg-[#252627] rounded-sm text-gray-300'
          >
            Save
          </button>
          <button
            onClick={downloadImage}
            className='px-3 py-[6px] outline-none bg-[#252627] rounded-sm text-gray-300'
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
