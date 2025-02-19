import React from 'react'

const Card = ({image, title, description, bgColor}) => {
  return (
   <div className='w-full h-full'>
    <div className={`w-full h-80 flex flex-col items-center gap-2 py-2 px-2 justify-center text-center ${bgColor || 'bg-white'} rounded-lg`}>
        <img src={image} alt={title} className='w-full h-full object-cover' />
        <p className='text-2xl font-bold'>{title}</p>
        <p className='text-sm'>{description}</p>
    </div>
   </div>
  )
}

export default Card