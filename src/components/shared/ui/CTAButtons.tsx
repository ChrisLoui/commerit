import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

interface ButtonTextProps {
    children: React.ReactNode;
    className?: string;
}

interface TalkWithDavidButtonProps {
    href: string;
    className?: string;
    text?: string;
    size?: 'sm' | 'md' | 'lg' | 'avatar' | 'header'; // Fixed: use specific union type instead of string
}

interface ExplorePricingButtonProps {
    href: string;
    className?: string;
    text?: string;
}

// Reusable button text component
const ButtonText: React.FC<ButtonTextProps> = ({ children, className = '' }) => {
    return (
        <span className={`text-md px-6 font-bold ${className}`}>
            {children}
        </span>
    );
};

export const TalkWithDavidButton: React.FC<TalkWithDavidButtonProps> = ({
    href,
    className = '',
    text = 'TALK WITH DAVID',
    size = 'sm', // Added default value
}) => {
    // Define image sizes based on button size
    const getImageSize = (buttonSize: 'sm' | 'md' | 'lg' | 'avatar' | 'header') => {
        switch (buttonSize) {
            case 'header':
                return { width: 32, height: 32 };
            case 'avatar':
                return { width: 36, height: 36 };
            case 'sm':
                return { width: 28, height: 28 };
            case 'lg':
                return { width: 44, height: 44 };
            default: // 'md'
                return { width: 36, height: 36 };
        }
    };

    const imageSize = getImageSize(size);

    return (
        <Button
            variant="primary"
            size={size}
            href={href}
            className={`inline-flex items-center ${className}`}
        >
            <Image
                src="/assets/images/hero/david.svg"
                alt="David"
                width={imageSize.width}
                height={imageSize.height}
                className="rounded-md object-cover flex-shrink-0"
            />
            <ButtonText>{text}</ButtonText>
        </Button>
    );
};

export const ExplorePricingButton: React.FC<ExplorePricingButtonProps> = ({
    href,
    className = '',
    text = 'EXPLORE PRICING'
}) => {
    return (
        <Button
            variant="secondary"
            href={href}
            className={`inline-flex items-center px-[20px] py-[12px] ${className}`}
        >
            <ButtonText>{text}</ButtonText>
        </Button>
    );
};

export { ButtonText };