import React from 'react'
import Title from './Title'
import team from '../assets/team.json'

export default function Team() {
    const { ug } = team;

    return <>
        <div className='flex flex-col gap-16 mx-auto container px-4'>
            <Title
                span={'Conoce al equipo que hace posible este evento'}
                title={'Equipo organizador'}
            />
            <div className='flex flex-wrap justify-center gap-3'>
                {ug.map((userGroup, index) =>
                    <img key={index} className='w-[58px] md:w-36' src={`/team/${userGroup}`} alt={userGroup} />
                )}
            </div>
        </div>
    </>
}