import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Home = () => {

  const navigate = useNavigate()
  const [state, setState] = useState({
    width: 0,
    height: 0
  });
  
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  
  const [show, setShow] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2, // Adjusted items count for better display on mobile
    },
  };
  const create = ()=>{
    navigate('/design/create', {
    state : {
    type : 'create',
    width : state.width,
    height : state.height
    }
  }
  )};

  return (
    <div className="pt-5">
      <div className="w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden">
        <button
          onClick={() => setShow(!show)}
          className="px-4 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dfa] text-white rounded-[3px] font-medium hover:bg-[#8b3dfd] absolute top-3 right-3"
        >
          Custom size
        </button>
        <div
          className={`absolute top-16 right-3 gap-3 p-4 text-white ${
            show ? 'visible opacity-100' : 'invisible opacity-50'
          } transition-all duration-500`}
        >
          <div className="grid grid-cols-2 pb-4 gap-3">
            <div className="flex gap-2 justify-center items-start flex-col">
              <label htmlFor="width">Width</label>
              <input  onChange={inputHandle}
                type="number"
                name="width"
                className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md"
                id="width"
              />
            </div>
            <div className="flex gap-2 justify-center items-start flex-col">
              <label  htmlFor="height">Height</label>
              <input  onChange={inputHandle}
                type="number"
                name="height"
                className="w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md"
                id="height"
              />
            </div>
          </div>
          <button onClick={create} className="px-4 py-2 text-[13px] overflow-hidden text-center bg-[#8b3dfa] text-white rounded-[3px] font-medium hover:bg-[#8b3dfd] w-full">
            Create new design
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-3xl pb-10 pt-6 font-semibold text-white">
          What will you design today?
        </h2>
      </div>
      <div>
        <Carousel autoPlay={true} infinite={true} responsive={responsive} transitionDuration={500}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => (
            <div className="relative group w-full h-[150px] px-2" key={i}>
              <Link to="#" className="w-full h-full block bg-[#ffffff12] p-4 rounded-md">
                <img
                  className="w-full h-full rounded-md overflow-hidden"
                  src="https://www.lifewire.com/thmb/KMpQtO4xnYtwu1jitmWNQstTP4M=/1280x0/filters:no_upscale():max_bytes(150000):strip_icc()/pixlr-e-editor-c17451ffb95344c5918221a240934613.png"
                  alt="project"
                />
              </Link>
              <div
                className="absolute hidden cursor-pointer top-1 right-2 text-red-500 p-2 transition-all duration-500 group-hover:block"
              >
                <FaTrash />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
