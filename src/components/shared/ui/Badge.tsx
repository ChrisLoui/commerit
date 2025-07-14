import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'orange' | 'stories';
    size?: 'sm' | 'md';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'orange',
    size = 'md',
    className
}) => {
    const baseStyles = 'inline-flex items-center font-medium uppercase tracking-wide';

    const variants = {
        default: 'text-gray-800',
        orange: 'text-white font-medium',
        stories: 'text-black font-medium'
    };

    const sizes = {
        sm: 'text-xs',
        md: 'text-xs'
    };

    const badgeClasses = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    return (
        <span className={badgeClasses}>
            {/* Orange Square */}
            <span className="w-[7px] h-[7px] bg-orange-500 mr-2 flex-shrink-0"></span>
            {children}
        </span>
    );
};