import React from 'react'

export default function MainButton({ placeholder }) {
    return <div>
        <button className='bg-gradient-to-r from-pink-cd-100 to-orange-cd-100 rounded-full px-8 py-2 md:py-4 md:text-xl font-bold'>{placeholder}</button>
    </div>
}
