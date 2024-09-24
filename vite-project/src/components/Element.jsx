import React from 'react';

const Element = ({ id, info, exId }) => {
    return (
        <>
            {
                exId ?
                <>
                    {/* Resize handles for corners (when exId is present) */}
                    <div onMouseDown={() => info.resizeElement(exId, info)}
                        className='hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
                    <div onMouseDown={() => info.resizeElement(exId, info)}
                        className='hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
                    <div onMouseDown={() => info.resizeElement(exId, info)}
                        className='hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
                    <div onMouseDown={() => info.resizeElement(exId, info)}
                        className='hidden absolute group-hover:block -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
                </>
                :
                <>
                    {/* Resize handles for corners (when exId is not present) */}
                    <div onMouseDown={() => info.resizeElement(id, info)}
                        className='hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
                    <div onMouseDown={() => info.resizeElement(id, info)}
                        className='hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
                    <div onMouseDown={() => info.resizeElement(id, info)}
                        className='hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
                    <div onMouseDown={() => info.resizeElement(id, info)}
                        className='hidden absolute group-hover:block -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
                </>
            }
            {/* Rotation handle */}
            <div onMouseDown={() => info.rotateElement(id, info)}
                className='hidden absolute group-hover:block -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
            
            {/* Movement handles */}
            <div onMouseDown={() => info.moveElement(id, info)}
                className='hidden absolute group-hover:block -top-[3px] left-[50%] translate-x-[-50%] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
            
            <div onMouseDown={() => info.moveElement(id, info)}
                className='hidden absolute group-hover:block top-[50%] -left-[3px] translate-y-[-50%] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
            
            <div onMouseDown={() => info.moveElement(id, info)}
                className='hidden absolute group-hover:block top-[50%] -right-[3px] translate-y-[-50%] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
            
            <div onMouseDown={() => info.moveElement(id, info)}
                className='hidden absolute group-hover:block -bottom-[3px] left-[50%] translate-x-[-50%] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[99999]'></div>
        </>
    );
};

export default Element;
