import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient text-[12px] text-primary outline-none font-poppins font-medium ${styles}`}>
      Get Started
    </button>
  )
}

export default Button