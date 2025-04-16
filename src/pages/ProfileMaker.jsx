import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import frameImage from '../assets/marco.png';
import MainButton from '../components/MainButton';

export default function ProfileMaker() {
    const [image, setImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef(null);
    const frameRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const downloadImage = () => {
        const canvas = document.createElement('canvas');
        const size = 350; // Match container size
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        const img = imgRef.current;
        const frame = frameRef.current;
        if (!img || !frame) return;

        const imgStyle = window.getComputedStyle(img);
        const matrix = new DOMMatrix(imgStyle.transform);

        const imgRect = img.getBoundingClientRect();
        const frameRect = frame.getBoundingClientRect();

        const padding = 56; // 14 * 4 (p-14 in tailwind)
        const effectiveWidth = size - (padding * 2);
        const effectiveHeight = size - (padding * 2);

        ctx.clearRect(0, 0, size, size);
        ctx.save();
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
        ctx.clip();

        ctx.drawImage(
            img,
            0,
            0,
            img.naturalWidth,
            img.naturalHeight,
            padding + matrix.e,
            padding + matrix.f,
            effectiveWidth,
            effectiveHeight
        );
        ctx.restore();

        const overlay = new Image();
        overlay.src = frameImage;
        overlay.onload = () => {
            ctx.drawImage(overlay, 0, 0, size, size);
            const link = document.createElement('a');
            link.download = 'profile.png';
            link.href = canvas.toDataURL();
            link.click();
        };
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-8 text-center font-bold">
            <div className='flex flex-col gap-2 px-3'>
                <span className='font-black text-5xl'>Unete a la fiesta</span>
                <span className='text-2xl font-light'>Carga una foto y descarga tu nueva imagen de perfil</span>
            </div>
            <div
                className="w-[350px] h-[350px] rounded-[20px] overflow-hidden relative shadow-2xl shadow-blue-cd-100/10"
                ref={frameRef}
            >
                {image && (
                    <motion.img
                        ref={imgRef}
                        src={image}
                        alt="preview"
                        className="absolute w-96 h-96 object-cover cursor-move p-14"
                        drag
                        dragConstraints={frameRef}
                        onLoad={() => setImageLoaded(true)}
                    />
                )}
                <img
                    src={frameImage}
                    alt="Marco"
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                />
            </div>
            <input name='fileLoad' id='fileLoad' type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            <label htmlFor="fileLoad" className='bg-gradient-to-r from-pink-cd-100 to-orange-cd-100 rounded-full px-8 py-2 md:py-4 md:text-xl font-bold'>
                Cargar una foto
            </label>
            {imageLoaded && (
                <button
                    onClick={downloadImage}>
                    <MainButton
                        placeholder={'Descargar'}
                    />
                </button>
            )}
        </div>
    );
}
