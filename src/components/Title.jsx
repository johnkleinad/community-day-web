import React from 'react'

export default function Title({ span, title }) {
    return <div>
        <span className='text-gradient text-xl'>{span}</span>
        <h3 className='text-5xl font-black'>{title}</h3>
    </div>
}
