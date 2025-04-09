import React from 'react'

export default function Hero() {
    return <div className='mx-auto container pt-16'>
        <div className='h-full grid grid-rows-2 gap-8'>
            <div className="flex flex-col gap-8 justify-end">
                <h1 className='text-6xl xl:text-8xl font-black'>AWS Community day <br />
                    <span className='text-orange-cd-100 font-light'>México 2025</span>
                </h1>
                <div className='font-light text-xl divide-x flex gap-7 h-11 items-center'>
                    <span className='pr-7'>14 de junio del 2025</span>
                    <span>Ciudad de México, México</span>
                </div>
                <div className='font-light text-xl'>
                    <span>Orgullosamente presentado por:</span>
                    <div className="h-10">
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 justify-start'>
                <div className="flex flex-col gap-4">
                    <h2 className='text-5xl font-black'>Un día inolvidable de <br />
                        aprendizaje y conexión.
                    </h2>
                    <span className='text-2xl font-light text-justify'>
                        Desde ponencias inspiradoras hasta sesiones interactivas y oportunidades para expandir tu red profesional, el <span className='font-semibold'>AWS Community Day 2025</span> será un evento único que transformará tu carrera. ¡Este es nuestro tercer año, y estamos más emocionados que nunca de compartirlo contigo! La inscripción abre próximamente. Suscríbete para estar al tanto de todas las novedades.
                    </span>
                </div>
                <div>
                    <button className='bg-gradient-to-r from-pink-cd-100 to-orange-cd-100 rounded-full px-10 py-4 text-3xl font-bold'>Regístrate gratis</button>
                </div>
            </div>
        </div>
    </div>
}
