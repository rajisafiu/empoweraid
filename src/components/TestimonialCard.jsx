import React from 'react'

const TestimonialCard =({nmae,message}) => {
  return (
    <div className='bg-white shadow-md roundded-lg p-6'>
        <p className='italic mb-4'>{message}</p>
        <h4 className='font-bold'>{nmae}</h4>

    </div>
  );
};

export default TestimonialCard;