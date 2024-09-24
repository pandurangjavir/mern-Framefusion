import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
      <div className='grid grid-cols-2 gap-2'>
        {
          [1, 2, 3, 4, 45, 56, 87, 98, 90, 3, 3, 34, 4, 3434, 3, 434, 434, 343, 43, 34].map((img, i) => (
            <Link key={i} to="#" className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
              <img
                className='w-full h-full object-cover'
                src='https://www.lifewire.com/thmb/KMpQtO4xnYtwu1jitmWNQstTP4M=/1280x0/filters:no_upscale():max_bytes(150000):strip_icc()/pixlr-e-editor-c17451ffb95344c5918221a240934613.png'
                alt={`Project ${i}`}
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
