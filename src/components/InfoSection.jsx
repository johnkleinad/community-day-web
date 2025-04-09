import React from 'react'
import Title from './Title'
import Cards from './Cards'
import BoxShadow from './BoxShadow'

export default function InfoSection() {
    return <div>
        <BoxShadow>
            <div className='flex flex-col gap-16 mx-auto container'>
                <Title
                    span="Aspectos más destacados del evento"
                    title="Descubre lo que hemos preparado para ti."
                />
                <span className='text-center text-2xl font-light'>El <strong>AWS Community Day México</strong> es un evento gratuito que reúne a profesionales, estudiantes y entusiastas de la tecnología interesados en aprender sobre servicios de AWS. Ofrece charlas técnicas, talleres prácticos y oportunidades para hacer networking con expertos del sector. Los asistentes pueden actualizarse sobre tendencias en la nube, adquirir nuevas habilidades en temas como DevOps, arquitectura cloud, inteligencia artificial y seguridad, además de conectar con una comunidad diversa y colaborativa.</span>
                <div className='flex flex-col gap-8'>
                    <Cards
                        img={'image-one'}
                        title={'Conoce a los líderes del futuro. '}
                        text={'El AWS Community Day te trae charlas, talleres y demostraciones exclusivas, impartidas por expertos de AWS y referentes de la industria en Latinoamérica. Vive experiencias únicas, explora casos de éxito reales y descubre las soluciones más innovadoras que están redefiniendo el panorama digital de hoy.'}
                    />
                    <div className='flex justify-end'>
                        <Cards
                            img={'image-two'}
                            title={'Conexiones que impulsan tu carrera.'}
                            text={'El AWS Community Day es la oportunidad perfecta para conectar con profesionales afines, intercambiar experiencias, y abordar juntos los desafíos más relevantes. Saldrás no solo con nuevos aprendizajes, sino con contactos clave que podrían transformar tu futuro profesional.'}
                        />
                    </div>
                    <Cards
                        img={'image-thre'}
                        title={'Siempre a la vanguardia.'}
                        text={'El AWS Community Day es la oportunidad perfecta para conectar con profesionales afines, intercambiar experiencias, y abordar juntos los desafíos más relevantes. Saldrás no solo con nuevos aprendizajes, sino con contactos clave que podrían transformar tu futuro profesional.'}
                    />
                </div>
            </div>
        </BoxShadow>
    </div>
}
