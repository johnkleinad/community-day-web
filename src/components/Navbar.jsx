import React from 'react'
import UseWindowSize from '../hooks/UseWindowSize';

export default function Navbar() {
    const { width } = UseWindowSize();
    return <>
        <nav className='w-full h-[48px] md:h-[68px]  bg-gradient from-transparent to-[#173860] sticky top-0 backdrop-blur-md z-10'>
            <div className="h-full bg-gradient-to-b from-[#000]/50 to-transparent w-full">
                <div className="flex justify-between items-center h-full mx-auto container">
                    <div className='text-xl font-bold w-full flex justify-center md:justify-start'>
                        <img src="/img/logo.svg" className='h-8 md:h-full' alt="logo" />
                    </div>
                    {width >= 780
                        &&
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
                    }
                </div>
            </div>
        </nav>
    </>
}