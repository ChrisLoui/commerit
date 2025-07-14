import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ChevronNavigationProps {
    canScrollLeft: boolean;
    canScrollRight: boolean;
    onScrollLeft: () => void;
    onScrollRight: () => void;
    variant?: 'dark' | 'light'; // Add variant prop
}

export const ChevronNavigation: React.FC<ChevronNavigationProps> = ({
    canScrollLeft,
    canScrollRight,
    onScrollLeft,
    onScrollRight,
    variant = 'dark', // Default to dark variant
}) => {
    // Define styles based on variant
    const getVariantStyles = (isEnabled: boolean) => {
        if (variant === 'light') {
            return isEnabled
                ? 'bg-black/5 text-black hover:bg-black/10 rounded-xl border border-black/10 transition'
                : 'text-gray-400 cursor-not-allowed opacity-50';
        }

        // Default dark variant
        return isEnabled
            ? 'bg-white/5 text-white hover:bg-slate-700 rounded-xl border border-white/10 transition'
            : 'text-gray-500 cursor-not-allowed opacity-50';
    };

    return (
        <div className="flex gap-3 flex-shrink-0">
            <button
                onClick={onScrollLeft}
                disabled={!canScrollLeft}
                className={`w-10 h-10 flex items-center justify-center ${getVariantStyles(canScrollLeft)}`}
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
                onClick={onScrollRight}
                disabled={!canScrollRight}
                className={`w-10 h-10 flex items-center justify-center ${getVariantStyles(canScrollRight)}`}
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    );
};

export default ChevronNavigation;