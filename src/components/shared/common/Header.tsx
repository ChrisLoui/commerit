'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/shared/ui/Button';
import { Navigation } from './Navigation';
import { strings } from '@/data';

export const Header: React.FC = () => {
    const { logo, navigation, cta } = strings.header;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-transparent px-20">
            <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-24 py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <Image
                                alt={logo.alt}
                                src={logo.src}
                                width={50}
                                height={40}
                                className="h-6 md:h-8 w-auto object-contain"
                            />
                            <span className="text-white font-bold text-2xl ml-2">{logo.text}</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <Navigation items={navigation} ctaButton={cta} />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium uppercase tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="px-3 py-2">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    href={cta.href}
                                    className="w-full inline-flex items-center justify-center"
                                >
                                    <Image
                                        src="/assets/images/hero/david.jpeg"
                                        alt="David"
                                        width={20}
                                        height={20}
                                        className="mr-2 rounded-md"
                                    />
                                    {cta.text}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};