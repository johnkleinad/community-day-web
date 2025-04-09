import React from 'react'

function highlightKeyword(text, keyword) {
    const regex = new RegExp(`(${keyword})`, 'gi');
    
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  }

export default function Cards({ title, text, img }) {
    return <div className='grid grid-cols-2 h-[295px] w-3/4 rounded-3xl overflow-hidden main-gradient shadow-2xl'>
        <div>
            <img src={`/img/${img}.jpg`} className='h-[295px] w-full object-cover' alt="" />
        </div>
        <div className='p-8 flex flex-col gap-4 justify-center'>
            <span className='text-4xl font-black text-gradient orange '>{title}</span>
            <p className='text-sm font-light'>{highlightKeyword(text, 'AWS Community Day')}</p>
        </div>
    </div>
}
