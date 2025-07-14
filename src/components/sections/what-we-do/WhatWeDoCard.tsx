import React from 'react';
import Image from 'next/image';

interface WhatWeDoCardProps {
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
}

export const WhatWeDoCard: React.FC<WhatWeDoCardProps> = ({ icon, iconAlt, title, description }) => {
    return (
        <div className="bg-white/5 rounded-xl flex flex-col items-start shadow-md border w-[466px] h-[500px] border-white/10 max-w-full transition-transform overflow-hidden">
            <div className=' p-10'>
            <h3 className="text-2xl font-bold text-white mb-3 leading-snug">{title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
            </div>
            <div className="w-full flex items-center justify-center p-4">
                <Image src={icon} alt={iconAlt} width={72} height={72} className="w-full h-full object-contain" />
            </div>
        </div>
    );
};