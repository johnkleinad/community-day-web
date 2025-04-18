import React from 'react'
import Title from './Title'
import MainButton from './MainButton'

export default function ContactUs() {
    return <>
        <div className='flex flex-col gap-8 md:gap-16 mx-auto container px-4'>
            <Title
                span={'Cualquier cosa que nos quieras decir...'}
                title={'¡Entremos en contacto!'}
            />
            <p className='text-2xl font-light'>¡Nos encantará saber de ti! Llámanos, envíanos un WhatsApp o un correo electrónico. Nos comunicaremos contigo tan pronto como sea posible.</p>
            <div className='flex flex-col md:flex-row gap-4'>
                <a href="mailto:day@awscommunity.mx">
                    <MainButton
                        placeholder={'day@awscommunity.mx'}
                    />
                </a>
                <a href="tel:+528131545424">
                    <MainButton
                        placeholder={'+52 (81) 3154 5424'}
                    />
                </a>
                <a href="https://wa.me/528131545424">
                    <MainButton
                        placeholder={'WhatsApp'}
                    />
                </a>
            </div>
        </div>
    </>
}
