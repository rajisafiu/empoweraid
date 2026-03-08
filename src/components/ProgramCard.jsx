import React from 'react'


const ProgramCard = ({tittle, amount, description})=> {
  return (
    <section id='programs'>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <h3 className='text-xl font-bold mb-2'>{tittle}</h3>
        <p className='text-green-600 font-semibold mb-2'>{amount}</p>
        <p className='mb-4'>{description}</p>
        <button className='bg-blue-900 text-white px-4 py-2 rounded'>Discover More</button>

    </div>
    </section>
  )
}

export default ProgramCard;