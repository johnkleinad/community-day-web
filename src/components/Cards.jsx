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

export default function Cards({ title, text, img, reverse }) {
  return <div className={`flex ${reverse && "flex-row-reverse"} h-[295px] w-3/4 min-h-[295px] rounded-3xl overflow-hidden main-gradient shadow-2xl`}>
    <div className='w-1/2'>
      <img src={`/img/${img}.jpg`} className='h-[295px] w-full object-cover' alt="" />
    </div>
    <div className='p-8 flex w-1/2 flex-col gap-4 justify-center'>
      <span className='text-4xl font-black text-gradient orange '>{title}</span>
      <p className='text-sm font-light'>{highlightKeyword(text, 'AWS Community Day')}</p>
    </div>
  </div>
}
