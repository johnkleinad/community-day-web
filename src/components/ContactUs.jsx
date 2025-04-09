import React from 'react'
import Title from './Title'
import MainButton from './MainButton'

export default function ContactUs() {
    return <>
        <div className='flex flex-col gap-16 mx-auto container'>
            <Title
                span={'Cualquier cosa que nos quieras decir...'}
                title={'¡Entremos en contacto!'}
            />
            <p className='text-2xl font-light'>¡Nos encantará saber de ti! Llámanos, envíanos un WhatsApp o un correo electrónico. Nos comunicaremos contigo tan pronto como sea posible.</p>
            <div className='flex gap-4'>
                <MainButton
                    placeholder={'day@awscommunity.mx'}
                />
                <MainButton
                    placeholder={'+52 (81) 4127 8669'}
                />
                <MainButton
                    placeholder={'WhatsApp'}
                />
            </div>
        </div>
    </>
}
