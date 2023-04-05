import React from 'react'

const Button = ({ styles }) => {
  return (
    <button 
      type="button" 
      className={`py-4 px-6 bg-black-gradient-2 font-poppins font-medium text-[18px] text-dimWhite hover:text-white outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  )
}

export default Button