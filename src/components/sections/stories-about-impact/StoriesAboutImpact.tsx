'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Badge } from '@/components/shared/ui/Badge';
import { ChevronNavigation } from '@/components/shared';
import { strings } from '@/data';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const StoriesAboutImpact: React.FC = () => {
    const { badge, headline, description, cards } = strings.storiesAboutImpact;
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

    useEffect(() => {
        checkScrollPosition();
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', checkScrollPosition);
            return () => scrollElement.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            const cardWidth = 950 + 40; // Card width + gap (updated to 40 for gap-10)
            scrollRef.current.scrollBy({
                left: -cardWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const cardWidth = 950 + 40; // Card width + gap (updated to 40 for gap-10)
            scrollRef.current.scrollBy({
                left: cardWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="bg-white min-h-screen w-full flex flex-col justify-center relative overflow-hidden">
            {/* Blender Image as header accent */}
            <img
                src={'/assets/images/stories-about-impact/blender.svg'}
                alt="Blender Icon"
                className="absolute top-0 right-0 object-contain z-10 mr-20 pointer-events-none select-none"
            />
            <div className="px-20 pt-8">
                <div className="max-w-[1920px] mx-auto w-full flex items-start justify-between">
                    {/* Left: Section Content */}
                    <div className="flex-1">
                        {/* Badge */}
                        <div className="mb-4">
                            <Badge variant="stories" className="text-xs">
                                {badge.text}
                            </Badge>
                        </div>
                        {/* Headline */}
                        <h2 className="text-5xl font-bold text-black mb-4 leading-tight">{headline}</h2>

                        {/* Description and Navigation Row */}
                        <div className="flex items-center justify-between mb-14">
                            {/* Description - Far Left */}
                            <p className="text-xl text-gray-700 max-w-2xl">{description}</p>
                            {/* Navigation Arrows - Far Right */}
                            <ChevronNavigation
                                variant="light"
                                canScrollLeft={canScrollLeft}
                                canScrollRight={canScrollRight}
                                onScrollLeft={scrollLeft}
                                onScrollRight={scrollRight}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Row */}
            <div
                ref={scrollRef}
                className="flex flex-row pb-20 px-20 gap-10 items-stretch mt-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            >
                {cards.map((card: any) => (
                    <div
                        key={card.id}
                        className=""
                    >
                        {/* Main Card Container */}
                        <div className={`rounded-2xl w-full h-full overflow-hidden relative z-10 flex flex-row`} style={{ backgroundColor: card.cardBgColor }}>
                            {/* Left: Logo, Title, Description, Read Story */}
                            <div className="flex flex-col  p-10 justify-between h-full w-1/2">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <img src={card.logo} alt={card.title} className="height-auto" />
                                    </div>
                                    <p className="text-[#3B2566] text-base font-normal leading-snug mb-12 text-left">
                                        {card.description}
                                    </p>
                                </div>
                                <a href="#" className="text-lg font-bold text-black flex items-center gap-2 hover:underline mt-auto tracking-wide">
                                    READ STORY <ArrowRightIcon className="w-6 h-6 ml-1" />
                                </a>
                            </div>
                            {/* Image */}
                            <div className="">
                                <img
                                    src={card.image}
                                    alt="Story visual"
                                    className="h-100 w-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};