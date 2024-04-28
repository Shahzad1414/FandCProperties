import React from 'react'

const Button = (props) => {
    const {text} = props;
  return (
    <a href="#" className="bg-primary text-white-900 hover:bg-primary py-2 px-6 rounded-full text-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">{text}</a>
  )
}

export default Button