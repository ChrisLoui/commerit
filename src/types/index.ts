// Header types
export interface NavigationItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
}

export interface Logo {
    text: string;
    alt: string;
}

export interface CTAButton {
    text: string;
    href: string;
}

export interface HeaderData {
    logo: Logo;
    navigation: NavigationItem[];
    cta: CTAButton;
}

// Hero types
export interface Badge {
    text: string;
    icon: string;
}

export interface CTAButtons {
    primary: CTAButton;
    secondary: CTAButton;
}

export interface HeroData {
    badge: Badge;
    headline: string;
    subheading: string;
    cta: CTAButtons;
}

// Trust types
export interface Company {
    name: string;
    logo: string;
    alt: string;
}

export interface TrustData {
    title: string;
    companies: Company[];
}

// What We Do types
export interface WhatWeDoNavigation {
    prevLabel: string;
    nextLabel: string;
}

export interface WhatWeDoData {
    sectionTitle: string;
    headline: string;
    description: string;
    navigation: WhatWeDoNavigation;
}

// Benefits types
export interface BenefitCard {
    id: string;
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
}

export interface BenefitsData {
    cards: BenefitCard[];
}

// Combined types
export interface AllStrings {
    header: HeaderData;
    hero: HeroData;
    trust: TrustData;
    whatWeDo: WhatWeDoData;
    benefits: BenefitsData;
}