import React from 'react'

function Button({
    children,
    type="button",
    bgColor = 'bg-blue-600',
    textcolor = 'text-white',
    className = '',
    ...props 
}) {
  return (
    <button className={`px-6 py-2 ${type} ${bgColor} ${textcolor} ${className}`} {...props}>{children}</button>
  )
}

export default Button