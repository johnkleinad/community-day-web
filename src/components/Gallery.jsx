import React, { useRef, useEffect } from 'react'
import Title from './Title'
import photosGdl from '../assets/photosGdl.json'
import photosMty from '../assets/photosMty.json'

export default function Gallery() {
    const { photos: gdl } = photosGdl
    const { photos: mty } = photosMty
    return <>
        <div className='mx-auto container px-4 flex flex-col gap-8 md:gap-8 md:gap-16 relative'>
            <Title
                span={'Una mirada al pasado'}
                title={'Revive las ediciones anteriores'}
            />
            <GalleryCard
                photos={gdl}
                path={'gdl'}
                year={'2024'}
                location={'Guadalajara'}
                video={'https://www.youtube-nocookie.com/embed/JaYOFUkmOfw?si=QVX9BjkIxNpfZ3DV'}
            />
            <GalleryCard
                photos={mty}
                path={'mty'}
                year={'2023'}
                location={'Monterrey'}
                video={'https://www.youtube.com/embed/cC_0YsGO5Z4?si=8SGJQVTEbJz-tDyy'}
            />
            <Title
            />
        </div>
    </>
}

const GalleryCard = ({ photos, path, year, location, video }) => {
    return <div>
        <div className='mx-auto container rounded-2xl p-4 sticky top-[68px] z-10'>
            <div className='flex justify-between items-center md:p-4 md:text-4xl font-bold bg-white/-sm sticky'>
                <span>{year}</span>
                <div className='absolute h-full w-full flex justify-center items-center'>
                    <img src="/img/logo.svg" alt="community-day-logo" className='w-[0px]' />
                </div>
                <span>{location}</span>
            </div>
        </div>
        <div className='flex flex-col gap-8 max-w-[1080px] mx-auto -z-10'>
            <div className="relative w-full pb-[56.25%]">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    photos.map((photo, index) => (
                        <img
                            key={index}
                            src={`gallery/${path}/${photo}`}
                            className={`rounded-4 w-full h-full object-cover ${index == photos.length - 1 && ' md:col-span-3 max-h-[500px] object-bottom'}`}
                            alt={photo}
                        />
                    ))
                }
            </div>
        </div>
    </div>
}