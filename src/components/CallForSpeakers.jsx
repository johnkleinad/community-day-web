import React from 'react'
import Title from './Title'
import MainButton from './MainButton'
import frameImage from '../assets/marco.png';

export default function CallForSpeakers() {
    return <div className='flex flex-col gap-8 md:gap-16 mx-auto container px-4'>
        <Title
            span={'Sé parte para esta edición'}
            title={'Apúntate como ponente'}
        />
        <p className='text-2xl font-light'>¡Comparte tu conocimiento en <strong>AWS Community Day México! </strong>
            ¿Eres experto o experta en AWS, tienes una historia que contar o una solución innovadora para compartir con la comunidad? ¡Queremos escucharte!
            Abre la conversación, lidera el cambio y ayuda a otros profesionales a crecer en el ecosistema de AWS. Envía tu propuesta y sé parte del evento más importante de la comunidad cloud en México.
            ¡Registra tu sesión hoy mismo! La fecha límite de recepción de propuestas es el 4 de mayo.</p>
        <div>
            <a className='' target='_blank' href="https://sessionize.com/aws-community-day-mexico-2025/?fbclid=PAZXh0bgNhZW0CMTEAAacHI3mPh8HkbQZ0WnTucn7mcVt2idLfT_K0c2Ti-IMXcZsQzqEtvMr6buG_RA_aem__xsKDC-SZzrKjRpwfBlfKw">
                <MainButton
                    placeholder={'Registrar mi sesión'}
                />
            </a>
        </div>
    </div>
}