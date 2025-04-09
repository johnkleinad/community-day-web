import React from 'react'
import Title from './Title'
import MainButton from './MainButton'

export default function Map() {
    return <div className='h-[70vh] relative'>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.984394820011!2d-99.17814028745092!3d19.499307181718553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f86cf91703fb%3A0x1bb8cb667a0c59e6!2sTecmilenio%20Ferrer%C3%ADa!5e0!3m2!1ses-419!2smx!4v1744229806213!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        <div className='mx-auto container relative'>
            <div className='sec-gradient absolute bottom-8 rounded-2xl p-1'>
                <div className="main-gradient px-16 py-8 rounded-[14px] flex flex-col gap-8">
                    <Title
                        span={'Información sobre la sede'}
                        title={'Ubicación del evento'}
                    />
                    <div className='grid grid-cols-2'>
                        <d1iv className='flex flex-col gap-4'>
                            <p className='text-lg font-light'>La institución es reconocida por su innovador modelo educativo, diseñado para potenciar el desarrollo profesional y personal de sus estudiantes. Su campus moderno, equipado con espacios colaborativos y tecnología de última generación, la posiciona como un referente destacado en la formación universitaria dentro de México.</p>
                            <MainButton
                                placeholder={'Ver ubicación'}
                            />
                        </d1iv>
                    </div>
                </div>
            </div>
        </div>
    </div>
}