import React from 'react'
import Title from './Title'

export default function Team() {
    return <>
        <div className='flex flex-col gap-16 mx-auto container px-4'>
            <Title
                span={'Conoce al equipo que hace posible este evento'}
                title={'Equipo organizador'}
            />
            <img src="/img/team-list.png" alt="team image" />
        </div>
    </>
}
