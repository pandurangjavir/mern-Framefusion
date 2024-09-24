import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CreateComponent from './CreateComponent';

const CreateDesign = () => {
  const ref = useRef();
  const { state } = useLocation();

  // Ensure state object has width and height, providing defaults if necessary
  const obj = {
    name: "main_frame",
    type: "rect",
    id: Math.floor(Math.random() * 100) + 1, // Fixed missing '*' and syntax for Math.random() usage
    height: state?.height || 100, // Default height if state.height is undefined
    width: state?.width || 100,   // Default width if state.width is undefined
    z_index: 1,
    color: 'green',
    image: '', // Assuming you want to add image later, setting as empty for now
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
      <div ref={ref} className='relative w-auto h-auto overflow-auto'>
        <CreateComponent info={obj} current_component={{}} />
      </div>
    </div>
  );
};

export default CreateDesign;
