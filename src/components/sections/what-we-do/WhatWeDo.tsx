'use client';
import React, { useRef, useState, useEffect } from 'react';
import { strings } from '@/data';
import { WhatWeDoCard } from './WhatWeDoCard';
import { Badge } from '@/components/shared/ui/Badge';

import { ChevronNavigation } from '@/components/shared/ui/ChevronNavigation';

export const WhatWeDo: React.FC = () => {
    const { headline, description, badge } = strings.whatWeDo;
    const { cards } = strings.benefits;

    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Check scroll position to update button states
    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
        }
    };

    // Initial check and event listener
    useEffect(() => {
        checkScrollPosition();
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', checkScrollPosition);
            return () => scrollElement.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    // Scroll functions
    const scrollLeft = () => {
        if (scrollRef.current) {
            const cardWidth = 466 + 32; // Card width + gap
            scrollRef.current.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const cardWidth = 466 + 32; // Card width + gap
            scrollRef.current.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-black-900 min-h-screen w-full pt-40 pb-20 py-8 flex flex-col justify-center">
            <div className='px-20'>
                <div className="max-w-[1920px] mx-auto w-full">
                    {/* Badge */}
                    <div className="mb-8">
                        <Badge variant="orange" className="text-xs">
                            {badge.text}
                        </Badge>
                    </div>

                    {/* Headline */}
                    <h2 className="text-5xl font-bold text-white mb-4 leading-tight">{headline}</h2>

                    {/* Description and Navigation Row */}
                    <div className="flex items-center justify-between mb-14">
                        {/* Description - Far Left */}
                        <p className="text-xl text-gray-300 max-w-2xl">{description}</p>

                        {/* Navigation Arrows - Far Right */}
                        <ChevronNavigation
                            canScrollLeft={canScrollLeft}
                            canScrollRight={canScrollRight}
                            onScrollLeft={scrollLeft}
                            onScrollRight={scrollRight}
                        />
                    </div>
                </div>
            </div>

            {/* Cards Carousel */}
            <div
                ref={scrollRef}
                className="flex flex-row gap-8 items-stretch pl-20 mt-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            >
                {cards.map(card => (
                    <div key={card.id} className="snap-center flex-shrink-0">
                        <WhatWeDoCard
                            icon={card.icon}
                            iconAlt={card.iconAlt}
                            title={card.title}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};