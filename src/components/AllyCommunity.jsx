import React from 'react'
import MainButton from './MainButton'
import Title from './Title'

export default function AllyCommunity() {
    return <>
        <div className='flex flex-col gap-16 mx-auto container px-4'>
            <Title
                span={'Conoce al equipo que hace posible este evento'}
                title={'Comunidades aliadas'}
            />
            <p className='text-2xl font-light'>¿Te gustaría ser parte de las comunidades aliadas?</p>
            <MainButton
                placeholder={'Únete'}
            />
        </div>
        {/* <div className='flex flex-col gap-16 mx-auto container'>
            <Title
                span={'Medios que hacen esto posible'}
                title={'Multimedios aliados'}
            />
        </div> */}
    </>
}
