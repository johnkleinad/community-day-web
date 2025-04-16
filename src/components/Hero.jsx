import React from 'react'
import Carrusel from './Carrusel'
import UseWindowSize from '../hooks/UseWindowSize';
import MainButton from './MainButton';

const arr = new Array(30).fill(0);

export default function Hero() {
    const { width } = UseWindowSize();

    return <div className='mx-auto container md:pt-16 px-4'>
        <div className="absolute opacity-10 left-0 top-[68px]">
            <Carrusel
                baseVelocity={width >= 780 ? 5 : 20}>
                {arr.map((_, index) => (
                    <img key={index} src="/img/Pattern.svg" className='inline-block' alt="" />
                ))}
            </Carrusel>
        </div>

        <div className='md:h-full grid grid-rows-2 gap-8'>
            <div className="flex flex-col gap-8 justify-end">
                <h1 className='text-6xl xl:text-8xl font-black uppercase leading-14 md:leading-24'>AWS Community Day <br />
                    <span className='text-orange-cd-100 font-light'>México 2025</span>
                </h1>
                <div className='font-light text-xl divide-x flex gap-7 h-11 items-center'>
                    <span className='pr-7'>14 de junio del 2025</span>
                    <span>Ciudad de México, México</span>
                </div>
                <div className='font-light text-xl'>
                    <span>Orgullosamente presentado por:</span>
                    <div className="h-16 flex items-center">
                        <img src="/sponsors/aws.png" className='h-full' alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 justify-start'>
                <div className="flex flex-col gap-4">
                    <h2 className='text-5xl font-black'>Un día inolvidable de <br />
                        aprendizaje y conexión.
                    </h2>
                    <p>
                        Desde ponencias inspiradoras hasta sesiones interactivas y oportunidades para expandir tu red profesional, el <span className='font-bold'>AWS Community Day 2025</span> será un evento único que transformará tu carrera. ¡Este es nuestro tercer año, y estamos más emocionados que nunca de compartirlo contigo! La inscripción abre próximamente. Suscríbete para estar al tanto de todas las novedades.
                    </p>
                </div>
                <a target='_blank' href="https://www.eventbrite.com.mx/e/aws-community-day-mexico-2025-registration-1263605089839?aff=oddtdtcreator">
                    <MainButton
                        placeholder={'Regístrate gratis'}
                    />
                </a>
            </div>
        </div>
    </div>
}