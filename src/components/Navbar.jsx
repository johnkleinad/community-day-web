import React from 'react'

export default function Navbar() {
    return <>
        <nav className='w-full h-[68px] bg-gradient from-transparent to-[#173860] sticky top-0 backdrop-blur-md'>
            <div className="h-full bg-gradient-to-b from-[#000]/50 to-transparent w-full">
                <div className="flex justify-between items-center h-full mx-auto container">
                    <div className='text-xl font-bold'>
                        <img src="/img/logo.svg" alt="logo" />
                    </div>
                    <div className='flex gap-8 items-center space-x-4'>
                        <div className="flex gap-[16px] font-bold">
                            <a href='#' className='hover:text-gray-300'>Ponentes</a>
                            <a href='#' className='hover:text-gray-300'>Agenda</a>
                            <a href='#' className='hover:text-gray-300'>Patrocinadores</a>
                            <a href='#' className='hover:text-gray-300'>FAQ's</a>
                        </div>
                        <button className="gradient-border">
                            <div className='bt-content'>Regístrate</div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
}