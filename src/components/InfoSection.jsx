import React from 'react'
import Title from './Title'
import Cards from './Cards'
import BoxShadow from './BoxShadow'
import { motion } from 'framer-motion'

export default function InfoSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className='md:-mt-16 '>
      <BoxShadow>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className='flex flex-col gap-8 md:gap-16 mx-auto container px-4'
        >
          <Title
            span="Aspectos más destacados del evento"
            title="Descubre lo que hemos preparado para ti"
          />
          <p className='text-2xl font-light'>
            El <strong>AWS Community Day México</strong> es un evento gratuito que reúne a profesionales, estudiantes y entusiastas de la tecnología interesados en aprender sobre servicios de AWS. Ofrece charlas técnicas, talleres prácticos y oportunidades para hacer networking con expertos del sector. Los asistentes pueden actualizarse sobre tendencias en la nube, adquirir nuevas habilidades en temas como DevOps, arquitectura cloud, inteligencia artificial y seguridad, además de conectar con una comunidad diversa y colaborativa.
          </p>
          <div className='flex flex-col gap-4 md:gap-8'>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <Cards
                img={'image-one'}
                title={'Conoce a los líderes del futuro'}
                text={'El AWS Community Day te trae charlas, talleres y demostraciones exclusivas, impartidas por expertos de AWS y referentes de la industria en Latinoamérica. Vive experiencias únicas, explora casos de éxito reales y descubre las soluciones más innovadoras que están redefiniendo el panorama digital de hoy'}
              />
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <div className='flex justify-end'>
                <Cards
                  reverse
                  img={'image-two'}
                  title={'Conexiones que impulsan tu carrera'}
                  text={'El AWS Community Day es la oportunidad perfecta para conectar con profesionales afines, intercambiar experiencias, y abordar juntos los desafíos más relevantes. Saldrás no solo con nuevos aprendizajes, sino con contactos clave que podrían transformar tu futuro profesional'}
                />
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <Cards
                img={'image-thre'}
                title={'Siempre a la vanguardia'}
                text={'En AWS Community Day estarás al tanto de las últimas tendencias y avances del ecosistema AWS. Este evento te coloca en el epicentro de la innovación, preparándote para enfrentar los retos del mañana y aprovechar las oportunidades que surgen en el acelerado mundo de la nube.'}
              />
            </motion.div>
          </div>
        </motion.div>
      </BoxShadow>
    </div>
  )
}