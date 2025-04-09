import React from 'react'
import Title from './Title'
import BoxShadow from './BoxShadow'

export default function Faq() {
    return <div>
        <BoxShadow>
            <div className='flex flex-col gap-16 mx-auto container'>
                <Title
                    span={'Consulta nuestras'}
                    title={'Preguntas frecuentes'}
                />
                <div className="grid grid-cols-2 gap-8">
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                    <FaqCard/>
                </div>
            </div>
        </BoxShadow>
    </div>
}

const FaqCard = () => {
    return <>
        <div className='main-gradient rounded-lg h-20'>
            <div className='flex gap-4 items-center h-full p-4'>
                <h3 className='text-xl'>¿Qué es el AWS Community Day?</h3>
               
            </div>
        </div>
    </>
}