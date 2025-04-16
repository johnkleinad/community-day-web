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
  return <>
    <div className={`flex flex-col md:flex-row ${reverse && "md:flex-row-reverse"} md:h-[295px] w-full md:w-3/4 md:min-h-[295px] rounded-xl md:rounded-3xl overflow-hidden main-gradient shadow-2xl relative`}>
      <div className='w-full absolute md:w-1/2 md:relative blur-[1px] md:blur-none inset-0'>
        <img src={`/img/${img}.jpg`} className='h-full w-full object-cover' alt="" />
      </div>
      <div className='p-8 flex md:w-1/2 flex-col gap-4 justify-center sticky bg-blue-cd-200/80'>
        <span className='text-xl md:text-3xl font-black text-gradient orange'>{title}</span>
        <span className='text-sm font-light'>{highlightKeyword(text, 'AWS Community Day')}</span>
      </div>
    </div>
  </>
}