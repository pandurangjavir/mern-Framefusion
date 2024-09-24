import React from 'react';

const Image = ({add_image}) => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {
        [1, 2, 3, 4, 45, 56, 87, 98, 90, 3, 3, 34, 4, 3434, 3, 434, 434, 343, 43, 34].map((img, i) => (
          <div key={i} onClick={()=>add_image('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg')} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
            <img
              className='w-full h-full object-cover'
              src='https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg'
              alt={`Image ${i}`}
            />
          </div>
        ))
      }
    </div>
  );
};

export default Image;
