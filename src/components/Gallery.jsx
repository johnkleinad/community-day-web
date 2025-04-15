import React, { useRef, useEffect } from 'react'
import Title from './Title'
import photosGdl from '../assets/photosGdl.json'
import photosMty from '../assets/photosMty.json'

export default function Gallery() {
    const { photos: gdl } = photosGdl
    const { photos: mty } = photosMty
    return <>
        <div className='mx-auto container px-4 flex flex-col gap-8 md:gap-16 relative'>
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
            />
        </div>
    </>
}

const GalleryCard = ({ photos, path, year, location, video }) => {
    return <div>
        <div className='mx-auto container rounded-2xl p-4 sticky top-[68px]'>
            <div className='flex justify-between items-center md:p-4  md:text-4xl font-bold bg-white/-sm'>
                <span>{year}</span>
                <div className='absolute h-full w-full flex justify-center items-center'>
                    <img src="/img/logo.svg" alt="community-day-logo" className='w-[0px]' />
                </div>
                <span>{location}</span>
            </div>
        </div>
        <div className='flex flex-col gap-8 max-w-[1080px] mx-auto'>
            {/* <VideoOnVisible src="https://youtu.be/JaYOFUkmOfw?si=dhMaGKvaDBBGDjxI" className='rounded-2xl' /> */}
            <iframe
                width="560"
                height="315"
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
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

const VideoOnVisible = ({ src, className }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.volume = 0.3;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            },
            { threshold: 0.5 }
        );
        if (video) {
            observer.observe(video);
        }
        return () => {
            if (video) {
                observer.unobserve(video);
            }
        };
    }, []);

    return <video ref={videoRef} src={src} className={className} loop />;
};