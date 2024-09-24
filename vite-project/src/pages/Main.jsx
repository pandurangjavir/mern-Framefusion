import React, { useState,useEffect } from 'react'; // Ensure useState is imported
import Header from '../components/Header';
import { BsGrid1X2, BsFillImageFill, BsFolder } from 'react-icons/bs';
import { FaShapes, FaCloudUploadAlt } from 'react-icons/fa';
import { TfiText } from 'react-icons/tfi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RxTransparencyGrid } from 'react-icons/rx';
import TemplateDesign from '../components/main/TemplateDesign';
import MyImages from '../components/MyImages';
import Projects from '../components/Projects';
import Image from '../components/Image';
import CreateComponent from '../components/CreateComponent';
const Main = () => {
    const [state, setState] = useState('')
    const [current_component,setCurrentComponent]=useState('')
    const [color, setColor] = useState('')
    const [image, setImage] = useState('')
    const [rotate, setRotate] = useState(0)
    const [left,setLeft]=useState('')
    const [top,setTop]=useState('')
    const [width,setWidth]=useState('')
    const [height,setHeight]=useState('')

    const [padding,setpadding]=useState('')
    const [font,setFont]=useState('')
    const [weight,setWeight]=useState('')
    const [opacity,setOpacity]=useState('')
    const [zIndex,setzIndex]=useState('')
    const [text,setText]=useState('')
    const [radius,setRadius]=useState(0)
    

    const [show, setShow] = useState({
      status: true,
      name: ''
    });

    const setElements = (type, name) => {
      setState(type);
      setShow({
        status: false, // Updated from `state` to `status`
        name
      });
    };

    const moveElement = (id, currentInfo) => {
      setCurrentComponent(currentInfo);
      let isMoving = true;
    
      const currentDiv = document.getElementById(id);
    
      const mouseMove = ({ movementX, movementY }) => {
        const getStyle = window.getComputedStyle(currentDiv);
        const left = parseInt(getStyle.left);
        const top = parseInt(getStyle.top);
    
        if (isMoving) {
          currentDiv.style.left = `${left + movementX}px`;
          currentDiv.style.top = `${top + movementY}px`;
        }
      };
    
      const mouseUp = () => {
        isMoving = false;
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('mouseup', mouseUp);
        
        setLeft(parseInt(currentDiv.style.left));
        setTop(parseInt(currentDiv.style.top));
      };
    
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('mouseup', mouseUp);
    };
    
    const resizeElement = (id,currentInfo) => {
        setCurrentComponent(currentInfo);
      
        let isMoving = true;
      
        const currentDiv = document.getElementById(id);
      
        const mouseMove = ({ movementX, movementY }) => {
          const getStyle = window.getComputedStyle(currentDiv);
          const width = parseInt(getStyle.width);
          const height = parseInt(getStyle.height);
          if (isMoving) {
            currentDiv.style.width = `${width + movementX}px`;
            currentDiv.style.height = `${height + movementY}px`;
          }
        };
      
        const mouseUp = (e) => {
          isMoving = false;
          window.removeEventListener('mousemove', mouseMove);
          window.removeEventListener('mouseup', mouseUp);
          setWidth(parseInt(currentDiv.style.width))
          setHeight(parseInt(currentDiv.style.height))
        };
      
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseup', mouseUp);
      };
      
    
    const rotateElement = (id, currentInfo) => {
        setCurrentComponent("")
        setCurrentComponent(currentInfo)
    
        const target = document.getElementById(id)
    
        const mouseMove = ({ movementX, movementY }) => {
            const getStyle = window.getComputedStyle(target)
            const trans = getStyle.transform
    
            const values = trans.split('(')[1].split(')')[0].split(',')
            const angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI))
    
            let deg = angle < 0 ? angle + 360 : angle
    
            if (movementX) {
                deg = deg + movementX
            }
            target.style.transform = `rotate(${deg}deg)`
        }
        const mouseUp = (e) => {
            window.removeEventListener('mousemove', mouseMove)
            window.removeEventListener('mouseup', mouseUp)
        
            const getStyle = window.getComputedStyle(target)
            const trans = getStyle.transform
            const values = trans.split('(')[1].split(')')[0].split(',')
            const angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI))
            let deg = angle < 0 ? angle + 360 : angle
            setRotate(deg)
        }
        
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseup', mouseUp)
        
    }
    

    const removeComponent = () => {
      const temp = components.filter(c => c.id !== id); // Filtering out the current component
      setCurrentComponent(''); // Resetting the current component
      setComponents(temp); // Updating the components list without the current component
      
    };

    const remove_background = () => {
      const com = components.find(c => c.id === current_component.id);
      const temp = components.filter(c => c.id !== current_component.id);
      com.image = '';
      setImage('');
      setComponents([...temp, com]);
    }
    
    
    const opacityHandle = (e) => {
        setOpacity(parseFloat(e.target.value))
    }
    
    const [components, setComponents] = useState([
      {
        name: "main_frame",
        type: "rect",
        id: Math.floor((Math.random() * 100) + 1),
        height: 450, // Ensure state.height is defined
        width: 660,   // Ensure state.width is defined
        z_index: 1,
        color: '#fff',
        image: "",
        setCurrentComponent : (a) =>setCurrentComponent(a)
      }
    ]);

    const createShape = (name, type) => {
      const style = {
        id: components.length + 1,
        name: name,
        type,
        left: 10,
        top: 10,
        opacity: 1,
        width: 200,
        height: 150,
        rotate,
        z_index: 2,
        color: '#3c3c3d',
        setCurrentComponent: (a) => setCurrentComponent(a),
        moveElement,
        resizeElement,
        rotateElement
      }
      setComponents([...components, style])
    }
    const add_text = (name, type) => {
        const style = {
            id: components.length + 1,
            name: name,
            type,
            left: 10,
            top: 10,
            opacity: 1,
            rotate,
            z_index: 10,
            padding: 6,
            font: 22,
            title: "Add text",
            weight: 400,
            color: "#3c3c3d",
            setCurrentComponent: (a) => setCurrentComponent(a),
            moveElement,
            resizeElement,
            rotateElement
        }
    
        setWeight("")
        setFont("")
        setCurrentComponent(style)
        setComponents([...components, style])
    }
    const add_image = (img) => {
        const style = {
          id: components.length + 1,
          name: 'image',
          type: 'image',
          left: 10,
          top: 10,
          opacity: 1,
          width: 200,
          height: 150,
          rotate,
          z_index: 2,
          radius: 0, // Fixed typo from 'ratius' to 'radius'
          image: img,
          setCurrentComponent: (a) => setCurrentComponent(a),
          moveElement,
          resizeElement,
          rotateElement
        };
      
        setCurrentComponent(style);
        setComponents([...components, style]);
      };
      
    
    useEffect(() => {
      if (current_component) {
    
        const index = components.findIndex(c => c.id === current_component.id);
        const temp = components.filter(c => c.id !== current_component.id);
        if (current_component.name !== 'text') {
            components[index].width = width || current_component.width;
            components[index].height = height || current_component.height;
            components[index].rotate = rotate || current_component.rotate;
        }

        if (current_component.name === 'text') {
            components[index].font = font || current_component.font;
            components[index].padding = padding || current_component.padding;
            components[index].weight = weight || current_component.weight;
            components[index].title = text || current_component.title;
        }
        
        if (current_component.name === 'main_frame' && image) {
          components[index].image = image || current_component.image;
        }
    
        components[index].color = color || current_component.color;

        if (current_component.name !== 'main_frame') {
          components[index].left = left || current_component.left;
          components[index].top = top || current_component.top;
          components[index].opacity = opacity || current_component.opacity;
          components[index].z_index = zIndex || current_component.z_index;
        }
    
        setComponents([...temp, components[index]]);

        setColor('')
        setWidth('')
        setHeight('')
        setTop('')
        setLeft('')
        setRotate(0)
        setOpacity('')
        setzIndex('')
        setText('')
        setRadius(0)
        
      }
    }, [color, image,left,top,width,height,opacity,zIndex,padding,font,weight,text,radius]);
    
    return (
      <div className='min-w-screen h-screen bg-black'>
          <Header />
          <div className='flex h-[calc(100%-60px)] w-screen'>
              <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto'>
                  <div 
                      onClick={() => setElements('design', 'design')} 
                      className={`${show.name === 'design' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
                  >
                      <span className='text-2xl'><BsGrid1X2 /></span>
                      <span className='text-xs font-medium'>Design</span>
                  </div>
  
                  <div 
                      onClick={() => setElements('shape', 'shape')} 
                      className={`${show.name === 'shape' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
                  >
                      <span className='text-2xl'><FaShapes /></span>
                      <span className='text-xs font-medium'>Shapes</span>
                  </div>
  
                  <div 
                      onClick={() => setElements('image', 'uploadImage')} 
                      className={`${show.name === 'uploadImage' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
                  >
                      <span className='text-2xl'><FaCloudUploadAlt /></span>
                      <span className='text-xs font-medium'>Upload</span>
                  </div>
  
                  <div 
                      onClick={() => setElements('text', 'text')} 
                      className={`${show.name === 'text' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
                  >
                      <span className='text-2xl'><TfiText /></span>
                      <span className='text-xs font-medium'>Text</span>
                  </div>
  
                  <div 
                      onClick={() => setElements('project', 'projects')} 
                      className={`${show.name === 'projects' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
                  >
                      <span className='text-2xl'><BsFolder /></span>
                      <span className='text-xs font-medium'>Project</span>
                  </div>
  
                  <div 
                      onClick={() => setElements('initImage', 'images')} 
                      className={`${show.name === 'images' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
                  >
                      <span className='text-2xl'><BsFillImageFill /></span>
                      <span className='text-xs font-medium'>Images</span>
                  </div>
  
                  <div 
                      onClick={() => setElements('background', 'background')} 
                      className={`${show.name === 'background' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
                  >
                      <span className='text-2xl'><RxTransparencyGrid /></span>
                      <span className='text-xs font-medium'>Background</span>
                  </div>
              </div>
  
              <div className='flex flex-1'>
                  <div 
                      className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[80px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}
                  >
                      <div 
                          onClick={() => setShow({ name: '', status: true })} 
                          className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 cursor-pointer h-[100px] rounded-full'
                      >
                          <MdKeyboardArrowLeft />
                      </div>
  
                      {state === 'design' && (
                          <div className='grid grid-cols-2 gap-2'>
                              <TemplateDesign />
                          </div>
                      )}
                      {state === 'shape' && (
                          <div className='grid grid-cols-3 gap-2'>
                              <div onClick={() => createShape('shape','rect')} className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                              <div onClick={() => createShape('shape','circle')} className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                              <div
                                style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
                                onClick={() => createShape('shape','triangle')} className='h-[90px] bg-[#3c3c3d] cursor-pointer'
                              ></div>
                          </div>
                      )}
                      {state === 'image' && <MyImages />}
                      {state === 'text' && (
                          <div>
                              <div className='grid grid-cols-1 gap-2'>
                                  <div onClick={()=>add_text('text','title')} className='bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>
                                      <h2>Add a Text</h2>
                                  </div>
                              </div>
                          </div>
                      )}
                      {state === 'project' && <Projects />}
                      {state === 'initImage' && (
                          <div className='h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                              <Image add_image={add_image} />
                          </div>
                      )}
                      {state === 'background' && (
                          <div className='h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                              <div className='grid grid-cols-2 gap-2'>
                                  {[1, 2, 3, 4, 45, 56, 87, 98, 90, 3, 3, 34, 4, 3434, 3, 434, 434, 343, 43, 34].map((img, i) => (
                                      <div onClick={() => setImage('https://www.lifewire.com/thmb/KMpQtO4xnYtwu1jitmWNQstTP4M=/1280x0/filters:no_upscale():max_bytes(150000):strip_icc()/pixlr-e-editor-c17451ffb95344c5918221a240934613.png')} key={i} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
                                          <img
                                              className='w-full h-full object-cover'
                                              src='https://www.lifewire.com/thmb/KMpQtO4xnYtwu1jitmWNQstTP4M=/1280x0/filters:no_upscale():max_bytes(150000):strip_icc()/pixlr-e-editor-c17451ffb95344c5918221a240934613.png'
                                              alt="image"
                                          />
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}
                  </div>
  
                  <div className='w-full flex h-full'>
                      <div className=' flex-grow flex justify-center items-center overflow-hidden'>
                          <div className='w-[650px] h-[480px] flex justify-center items-center overflow-hidden'>
                              <div id='main_design' className='w-auto relative h-auto overflow-hidden'>
                                  {components.map((c, i) => (
                                      <CreateComponent
                                          key={i}
                                          info={c}
                                          current_component={current_component}
                                          removeComponent={removeComponent}
                                      />
                                  ))}
                              </div>
                          </div>
                      </div>
                      
                      {current_component && (
                          <div className='w-[250px] bg-[#252627] text-gray-300 px-3 py-2'>
                              <div className='flex gap-6 flex-col items-start h-full px-3 justify-start'>
                                  <div className='flex gap-4 justify-start items-start mt-4'>
                                      <span>Color: </span>
                                      <label
                                          className='w-[30px] h-[30px] cursor-pointer rounded-sm'
                                          style={{
                                              background: `${current_component.color && current_component.color !== '#fff'
                                                  ? current_component.color
                                                  : 'gray'
                                              }`
                                          }}
                                          htmlFor="color"
                                      ></label>
                                      <input
                                          onChange={(e) => setColor(e.target.value)}
                                          type="color"
                                          className='invisible'
                                          id='color'
                                      />
                                  </div>
  
                                {
                                  current_component.name === 'main_frame' && image && (
                                      <div className='text-white mt-4'>
                                          <button
                                              className='p-[6px] bg-slate-700 rounded-sm'
                                              onClick={remove_background}
                                          >
                                              Remove background
                                          </button>
                                      </div>
                                )}
                                {
                                    current_component.name !== 'main_frame' && (
                                        <div className='flex gap-6 flex-col'>
                                            <div className='flex gap-1 justify-start items-start'>
                                                <span className='text-md w-[70px]'>Opacity: </span>
                                                <input
                                                    onChange={opacityHandle}
                                                    className='w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md'
                                                    type="number"
                                                    step={0.1}
                                                    min={0.1}
                                                    max={1}
                                                    value={current_component.opacity}
                                                />
                                            </div>
                                            <div className='flex gap-1 justify-start items-start'>
                                                <span className='text-md w-[70px]'>Z-Index: </span>
                                                <input
                                                    onChange={(e) => setzIndex(parseInt(e.target.value))}
                                                    className='w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md'
                                                    type="number"
                                                    step={1}
                                                    value={current_component.z_index}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                current_component.name === 'image' && (
                                    <div className='flex gap-1 justify-start items-start'>
                                    <span className='text-md w-[70px]'>Radius:</span>
                                    <input
                                        onChange={(e) => setRadius(parseInt(e.target.value))}
                                        className='w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md'
                                        type='number'
                                        step={1}
                                        value={current_component.radius}
                                    />
                                    </div>
                                )
                                }
                                {
                                    current_component.name === 'text' && (
                                        <>
                                            <div className='flex gap-1 justify-start items-start'>
                                                <span className='text-md w-[70px]'>Padding: </span>
                                                <input
                                                    onChange={(e) => setPadding(parseInt(e.target.value))}
                                                    className='w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md'
                                                    type="number"
                                                    step={1}
                                                    value={current_component.padding}
                                                />
                                            </div>
                                            <div className='flex gap-1 justify-start items-start'>
                                                <span className='text-md w-[72px]'>Font size: </span>
                                                <input
                                                    onChange={(e) => setFont(parseInt(e.target.value))}
                                                    className='w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md'
                                                    type="number"
                                                    step={1}
                                                    value={current_component.font}
                                                />
                                            </div>

                                            <div className='flex gap-1 justify-start items-start'>
                                                <span className='text-md w-[70px]'>Weight: </span>
                                                <input
                                                    onChange={(e) => setWeight(parseInt(e.target.value))}
                                                    className='w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md'
                                                    type="number"
                                                    step={100} min={100} max={900}
                                                    value={current_component.weight}
                                                />
                                            </div>

                                            <div className='flex gap-2 flex-col justify-start items-start'>
                                                <input
                                                    onChange={(e) => setCurrentComponent({
                                                        ...current_component,
                                                        title: e.target.value
                                                    })}
                                                    className='border border-gray-700 bg-transparent outline-none p-2 rounded-md'
                                                    type="text"
                                                    value={current_component.title}
                                                />
                                                <button
                                                    onClick={() => setText(current_component.title)}
                                                    className='px-4 py-2 bg-purple-500 text-xs text-white rounded-sm'
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </>
                                    )
                                    
                                }
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>
  );
  
};

export default Main;
