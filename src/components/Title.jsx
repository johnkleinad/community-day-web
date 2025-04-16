import React from 'react'

export default function Title({ span, title }) {
    return <div>
        <span className='text-gradient text-lg md:text-xl'>{span}</span>
        <h3 className='font-black'>{title}</h3>
    </div>
}
