import React from 'react'

type AboutPropus ={
    title: string;
    price: number;
}

function About({title, price}:AboutPropus) {
  return (
    <div>
        {title}
        {price}
    </div>
  )
}

export default About