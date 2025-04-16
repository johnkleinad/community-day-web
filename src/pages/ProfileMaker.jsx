import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import frameImage from '../assets/marco.png';

const FRAME_SIZE = 400;     
const INNER_SIZE = 270;     
const RING_THICKNESS = (FRAME_SIZE - INNER_SIZE) / 2;

export default function ProfileMaker() {
    const [imageURL, setImageURL] = useState(null);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

    const frameRef = useRef(null);
    const maskRef = useRef(null);
    const imageRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setImageURL(url);
            setDragPosition({ x: 0, y: 0 });
        }
    };

    const handleDragEnd = (event, info) => {
        setDragPosition(info.offset);
    };

    const downloadImage = () => {
        if (!frameRef.current || !maskRef.current || !imageRef.current) return;

        const scale = window.devicePixelRatio || 1;
        const canvas = document.createElement('canvas');
        canvas.width = FRAME_SIZE * scale;
        canvas.height = FRAME_SIZE * scale;
        const ctx = canvas.getContext('2d');
        ctx.scale(scale, scale);

        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, FRAME_SIZE, FRAME_SIZE);

        const center = FRAME_SIZE / 2;
        const radius = INNER_SIZE / 2;
        ctx.save();
        ctx.beginPath();
        ctx.arc(center, center, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.clip();

        const maskRect = maskRef.current.getBoundingClientRect();
        const imgRect = imageRef.current.getBoundingClientRect();

        const offsetX = imgRect.left - maskRect.left;
        const offsetY = imgRect.top - maskRect.top;

        const displayedWidth = imgRect.width;
        const displayedHeight = imgRect.height;
        const naturalWidth = imageRef.current.naturalWidth;
        const naturalHeight = imageRef.current.naturalHeight;
        const ratioX = naturalWidth / displayedWidth;
        const ratioY = naturalHeight / displayedHeight;

        const sx = offsetX * ratioX * -1;
        const sy = offsetY * ratioY * -1;
        const sWidth = INNER_SIZE * ratioX;
        const sHeight = INNER_SIZE * ratioY;

        ctx.drawImage(
            imageRef.current,
            sx,
            sy,
            sWidth,
            sHeight,
            RING_THICKNESS,
            RING_THICKNESS,
            INNER_SIZE,
            INNER_SIZE
        );

        ctx.restore();

        const overlay = new Image();
        overlay.src = frameImage;
        overlay.onload = () => {
            ctx.drawImage(overlay, 0, 0, FRAME_SIZE, FRAME_SIZE);

            const link = document.createElement('a');
            link.download = 'profile.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.95);
            link.click();
        };
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>Generador de Imagen de Perfil</h1>

            <input type="file" accept="image/*" onChange={handleFileChange} />

            <div
                ref={frameRef}
                style={{
                    position: 'relative',
                    width: FRAME_SIZE + 'px',
                    height: FRAME_SIZE + 'px',
                    margin: '1rem auto',
                }}
            >
                <div
                    ref={maskRef}
                    style={{
                        position: 'absolute',
                        top: RING_THICKNESS + 'px',
                        left: RING_THICKNESS + 'px',
                        width: INNER_SIZE + 'px',
                        height: INNER_SIZE + 'px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        backgroundColor: '#eee'
                    }}
                >
                    {imageURL && (
                        <motion.img
                            ref={imageRef}
                            src={imageURL}
                            alt="Uploaded"
                            drag
                            dragConstraints={maskRef}
                            dragElastic={0}
                            onDragEnd={handleDragEnd}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                minWidth: '100%',
                                minHeight: '100%',
                                userSelect: 'none',
                                cursor: 'grab',
                            }}
                        />
                    )}
                </div>

                <img
                    src={frameImage}
                    alt="Frame"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: FRAME_SIZE + 'px',
                        height: FRAME_SIZE + 'px',
                        pointerEvents: 'none',
                        userSelect: 'none',
                    }}
                />
            </div>

            {imageURL && (
                <button onClick={downloadImage} style={{ marginTop: '1rem' }}>
                    Descargar Imagen
                </button>
            )}
        </div>
    );
}
