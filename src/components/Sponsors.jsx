import React from 'react'
import Title from './Title'

export default function Sponsors() {
    return <div className='relative h-[50vh] z-10 backdrop-blur-xs'>
        <div className="bg-[url(/img/pattern.png)] absolute inset-0 opacity-5 z-20" />
        <div className='mx-auto container '>
            <Title
                span={'Todo es posible gracias a'}
                title={'Nuestros patrocinadores'}
            />
        </div>
    </div>
}
