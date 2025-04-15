import React, { useState, useRef, useLayoutEffect } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import iconsList from '../assets/icons.json'

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

export default function Parralax({ children }) {
    const { scrollY } = useViewportScroll();
    const mainRef = useRef(null);
    const [siteHeight, setSiteHeight] = useState(1000);

    useLayoutEffect(() => {
        if (mainRef.current) {
            setSiteHeight(mainRef.current.scrollHeight);
        }
    }, [mainRef]);
    const smallY = useTransform(scrollY, [0, siteHeight], [0, siteHeight * 0.6]);
    const mediumY = useTransform(scrollY, [0, siteHeight], [0, siteHeight * 0.32]);
    const largeY = useTransform(scrollY, [0, siteHeight], [0, siteHeight * 0.1]);

    const staticPositions = [
        { top: '7%', left: '6%' },
        { top: '9%', right: '5%' },
        { top: '11%', left: '10%' },
        { top: '13%', right: '8%' },
        { top: '15%', left: '5%' },
        { top: '17%', right: '12%' },
        { top: '19%', left: '8%' },
        { top: '21%', right: '20%' },
        { top: '23%', left: '15%' },
        { top: '25%', right: '5%' },
        { top: '27%', left: '6%' },
        { top: '29%', right: '8%' },
        { top: '31%', left: '10%' },
        { top: '33%', right: '6%' },
        { top: '35%', left: '12%' },
        { top: '37%', right: '25%' },
        { top: '39%', left: '8%' },
        { top: '41%', right: '18%' },
        { top: '43%', left: '2%' },
        { top: '45%', right: '10%' },
        { top: '47%', left: '5%' },
        { top: '49%', right: '15%' },
        { top: '51%', left: '12%' },
        { top: '53%', right: '2%' },
        { top: '55%', left: '16%' },
        { top: '57%', right: '6%' },
        { top: '59%', left: '8%' },
        { top: '61%', right: '10%' },
        { top: '63%', left: '12%' },
        { top: '65%', right: '5%' },
        { top: '67%', left: '6%' },
        { top: '69%', right: '8%' },
        { top: '71%', left: '10%' },
        { top: '73%', right: '6%' },
        { top: '75%', left: '12%' },
        { top: '77%', right: '25%' },
        { top: '79%', left: '8%' },
        { top: '81%', right: '18%' },
        { top: '83%', left: '2%' },
        { top: '85%', right: '10%' },
        { top: '87%', left: '5%' },
        { top: '89%', right: '15%' }
    ];

    const selectedIcons = shuffle([...iconsList]).slice(0, 40);
    const elements = staticPositions.map((pos, i) => {
        const icon = selectedIcons[i];
        if (!icon) return null;
        let sizeClass = "";
        let parallaxTransform;
        if (i % 3 === 0) {
            sizeClass = "w-8";
            parallaxTransform = smallY;
        } else if (i % 3 === 1) {
            sizeClass = "w-10";
            parallaxTransform = mediumY;
        } else {
            sizeClass = "w-16";
            parallaxTransform = largeY;
        }
        return (
            <motion.div
                key={i}
                className="absolute opacity-40 -z-10 rounded-[5px] overflow-hidden"
                style={{
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    y: parallaxTransform
                }}
            >
                <img
                    src={`/icons/${icon}`}
                    alt={`icon-${i}`}
                    className={`h-auto ${sizeClass}`}
                />
            </motion.div>
        );
    });

    return (
        <>
            <main ref={mainRef} className="flex flex-col gap-8 md:gap-16 relative overflow-hidden w-full">
                <div>
                    {elements}
                </div>
                {children}
            </main>
        </>
    );
}