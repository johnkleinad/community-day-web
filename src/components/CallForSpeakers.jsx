import React from 'react'
import Title from './Title'

export default function CallForSpeakers() {
    return <div className='flex flex-col gap-16 mx-auto container'>
        <Title
            span={'Sé parte para esta edición'}
            title={'Apúntate como ponente'}
        />
        <p className='text-2xl font-light'>¡Comparte tu conocimiento en <strong>AWS Community Day México! </strong>
            ¿Eres experto o experta en AWS, tienes una historia que contar o una solución innovadora para compartir con la comunidad? ¡Queremos escucharte!
            Abre la conversación, lidera el cambio y ayuda a otros profesionales a crecer en el ecosistema de AWS. Envía tu propuesta y sé parte del evento más importante de la comunidad cloud en México. ¡Te esperamos!
            ¡Registra tu charla hoy mismo!</p>
        <div> 
            <a className='bg-gradient-to-r from-pink-cd-100 to-orange-cd-100 rounded-full px-10 py-4 text-3xl font-bold' target='_blank' href="https://sessionize.com/aws-community-day-mexico-2025/?fbclid=PAZXh0bgNhZW0CMTEAAacHI3mPh8HkbQZ0WnTucn7mcVt2idLfT_K0c2Ti-IMXcZsQzqEtvMr6buG_RA_aem__xsKDC-SZzrKjRpwfBlfKw">Registra tu charla</a>
        </div>   
    </div>
}
