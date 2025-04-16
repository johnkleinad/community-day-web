import React from 'react'
import Title from './Title'

export default function Sponsors() {
    return <div id='sponsors' className='relative h-[49.4vh] z-10 backdrop-blr-xs'>
        <div className="bg-[url(/img/pattern.png)] absolute inset-0 opacity-5 z-20" />
        <div className='mx-auto container px-4 h-full'>
            <Title
                span={'Todo esto es posible'}
                title={'Nuestros patrocinadores'}
            />
            <div className='flex justify-center items-center h-full'>
                <img src="/sponsors/aws.png" className='h-[200px] md:h-[300px]' alt="" />
            </div>
        </div>
    </div>
}
