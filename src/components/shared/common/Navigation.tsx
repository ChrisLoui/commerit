import React from 'react';
import { NavigationItem } from '@/types';
import { TalkWithDavidButton, ExplorePricingButton } from '@/components/shared';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface NavigationProps {
    items: NavigationItem[];
    ctaButton: {
        text: string;
        href: string;
    };
}

export const Navigation: React.FC<NavigationProps> = ({ items, ctaButton }) => {
    // Separate regular nav items from button items
    const regularNavItems = items.filter(item =>
        item.label !== 'EXPLORE PRICING' && item.label !== 'TALK WITH DAVID'
    );

    const explorePricingItem = items.find(item => item.label === 'EXPLORE PRICING');

    return (
        <nav className="hidden lg:flex items-center gap-5 pt-1 pr-1 pb-1 pl-5 rounded-2xl bg-white/5 backdrop-blur-md">
            {/* Regular Navigation Items */}
            {regularNavItems.map((item) => (
                <div key={item.label} className="relative">
                    <a
                        href={item.href}
                        className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium uppercase tracking-wide flex items-center py-2 px-1"
                    >
                        {item.label}
                        {item.hasDropdown && (
                            <ChevronDownIcon className="w-4 h-3 ml-2 font-bold" />
                        )}
                    </a>

                    {/* Dropdown indicator styling could be added here */}
                    {item.hasDropdown && (
                        <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                        </div>
                    )}
                </div>
            ))}

            <div className="flex items-center gap-2 p-1">
                {/* Explore Pricing Button */}
                {explorePricingItem && (
                    <ExplorePricingButton
                        href={explorePricingItem.href}
                    />
                )}
                {/* Talk with David Button */}
                <TalkWithDavidButton
                    size="header"
                    href={ctaButton.href}
                />
            </div>

        </nav>
    );
};