import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg' | 'avatar' | 'header';
    href?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    href,
    children,
    className,
    ...props
}) => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 uppercase tracking-wide';

    const variants = {
        primary: 'bg-white text-slate-900 hover:bg-gray-100 border border-white',
        secondary: 'bg-white/5 text-white hover:bg-white hover:text-slate-900 backdrop-blur-[30px]  border'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
        avatar: 'px-1 py-2 text-sm',
        header: 'px-1 py-1 text-xs' 
    };

    const buttonClasses = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    // Custom styles for secondary button based on Figma specs
    const customStyles = variant === 'secondary' ? {
        backgroundColor: '#FFFFFF0D',
        borderColor: '#FFFFFF26'
    } : {};

    if (href) {
        return (
            <a
                href={href}
                className={buttonClasses}
                style={customStyles}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses} style={customStyles} {...props}>
            {children}
        </button>
    );
};