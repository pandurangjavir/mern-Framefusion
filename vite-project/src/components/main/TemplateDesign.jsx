import React from 'react';

const TemplateDesign = () => {
  return (
    <>
      {[1, 2, 3, 4].map((d, i) => (
        <div 
          key={i} 
          className="group w-full rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer"
        >
          <img 
            className="w-full h-full rounded-md overflow-hidden" 
            src="https://www.lifewire.com/thmb/KMpQtO4xnYtwu1jitmWNQstTP4M=/1280x0/filters:no_upscale():max_bytes(150000):strip_icc()/pixlr-e-editor-c17451ffb95344c5918221a240934613.png" 
            alt={`Project ${d}`} 
          />
        </div>
      ))}
    </>
  );
}

export default TemplateDesign;
