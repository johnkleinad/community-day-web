import React from 'react'

export default function Footrer() {
    return <>
        <footer className='mt-16'>
            <div className="bg-gradient-to-l from-pink-cd-100 to-orange-cd-100 h-[1px]" />
            <div className='mx-auto container flex flex-col md:flex-row gap-4 justify-between font-light py-8 text-xs md:text-sm px-4'>
                <span>Copyright © 2025 Asociación Mexicana para la Innovación y Gestión de Oportunidades, A.C. - AWS Community Day México</span>
                <span>Designed with ♥ by <a href="https://www.linkedin.com/in/johnkleinad/" target='_blank' className='underline'>John Kleinad</a></span>
            </div>
        </footer>
    </>
}
