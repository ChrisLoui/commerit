import React from 'react';
import { Badge } from '@/components/shared/ui/Badge';
import { TalkWithDavidButton, ExplorePricingButton } from '@/components/shared';
import { strings } from '@/data';
import Image from 'next/image';

export const Hero: React.FC = () => {
    const { badge, headline, subheading, cta } = strings.hero;
    const { title, subTitle, companies } = strings.trust;

    return (
        <section className="relative bg-slate-900 flex items-center overflow-hidden h-screen w-screen pt-40 pb-20 px-20 py-8">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-screen object-cover z-0 scale-x-[-1]"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                preload="metadata"
            >
                <source src="/assets/images/hero/bg.mp4" type="video/mp4" />
            </video>

            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r h-screen from-slate-900/90 to-slate-900/50 z-10"
            />

            {/* Content */}
            <div className="relative z-20 w-full">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="mb-8">
                            <Badge variant="orange" className="text-xs">
                                {badge.text}
                            </Badge>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {headline}
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
                            {subheading}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <TalkWithDavidButton
                                size="avatar"
                                href={cta.primary.href}
                            />

                            <ExplorePricingButton
                                href={cta.secondary.href}
                            />
                        </div>
                    </div>
                </div>

                {/* Trust Section - Full Width */}
                <div className="mt-24 w-full">
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center w-full">
                            {/* Title section */}
                            <div className="flex-shrink-0 mr-6 lg:mr-8">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                        {title}
                                    </h2>
                                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                        {subTitle}
                                    </h2>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-white/15 mx-6 lg:mx-8 flex-shrink-0"></div>

                            {/* Companies container with even spacing */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between w-full">
                                    {companies.map((company, index) => (
                                        <div
                                            key={company.name}
                                            className="flex items-center justify-center flex-1"
                                        >
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={50}
                                                height={40}
                                                className="h-6 md:h-8 w-auto object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fading gradient overlay at the bottom */}
            <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 z-30"
                style={{
                    background: 'linear-gradient(to bottom, rgba(15,23,42,0) 0%, #09090b 100%)'
                }}
            />
        </section>
    );
};