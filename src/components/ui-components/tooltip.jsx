import React from 'react'
import { CiCircleInfo } from 'react-icons/ci'

const Tooltip = ({showTooltip, setShowTooltip, text}) => {
  return (
    <div className='relative'>
      <div className='flex items-center'>
        {showTooltip && (
          <div className="absolute h-16 w-0.5 bg-white left-4 -top-16"></div>
        )}
        <CiCircleInfo 
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className='text-white w-8 h-8 cursor-pointer bg-black rounded-full hover:text-red-600 transition-all duration-500 ease-in-out'
        />
      </div>
      {showTooltip && (
        <div 
          className="absolute -top-24 left-8 px-4 py-2 rounded-lg bg-white text-slate-900 transform transition-all duration-300 ease-in-out"
          style={{
            animation: 'slideIn 0.3s ease-in-out'
          }}
        >
          <i className="fas fa-info-circle mr-2"></i>
          {text || 'pest protect'}
          <style jsx>{`
            @keyframes slideIn {
              0% {
                opacity: 0;
                transform: translateY(10px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  )
}

export default Tooltip
