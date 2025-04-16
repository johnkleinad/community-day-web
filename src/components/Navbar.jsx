import React from 'react'
import UseWindowSize from '../hooks/UseWindowSize';

export default function Navbar() {
    const { width } = UseWindowSize();
    return <>
        <nav className='w-full h-[68px] bg-gradient from-transparent to-[#173860] sticky top-0 backdrop-blur-md z-50'>
            <div className="h-full bg-gradient-to-b from-[#000]/50 to-transparent w-full">
                <div className="flex justify-between items-center h-full mx-auto container">
                    <a className='text-xl font-bold w-full md:w-auto flex justify-center md:justify-start'>
                        <img src="/img/logo.svg" className='h-10 md:h-13' alt="logo" />
                    </a>
                    {width >= 780
                        &&
                        <div className='flex gap-8 items-center'>
                            <div className="flex gap-[16px] font-bold w-full">
                                {/* <a href='#' className='hover:text-gray-300'>Ponentes</a> */}
                                {/* <a href='#' className='hover:text-gray-300 '>Agenda</a> */}
                                <a href='#callForSpeakers' className='hover:text-gray-300 '>Call for Speakers</a>
                                <a href='#sponsors' className='hover:text-gray-300 '>Patrocinadores</a>
                                <a href='#faqs' className='hover:text-gray-300 '>FAQs</a>
                            </div>
                            <a href="https://www.eventbrite.com.mx/e/aws-community-day-mexico-2025-registration-1263605089839?aff=oddtdtcreator" target='_blank'>
                                <button className="gradient-border">
                                    <div className='bt-content'>
                                        Regístrate
                                    </div>
                                </button>
                            </a>
                        </div>
                    }
                </div>
            </div>
        </nav>
    </>
}