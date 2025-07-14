# Commerit - AI Software Agency Website

This is a Next.js project for Commerit, an AI software agency that builds custom AI agents to automate business processes.

## Website Structure (Based on Layout)

### Header Component
- **Logo**: "Commerit" with icon
- **Navigation**: CASE STUDIES, CUSTOMERS, ABOUT, PRODUCTS (with dropdown), EXPLORE PRICING
- **CTA Button**: "TALK WITH DAVID" (primary button)
- **Styling**: Dark background with white text

### Hero Section
- **Badge**: "AT SOFTWARE AGENCY" (orange accent)
- **Headline**: "We build custom AI agents that automate your business"
- **Subheading**: "From support to sales to operations—we replace manual tasks with tailored AI systems."
- **CTAs**: Two buttons - "TALK WITH DAVID" and "EXPLORE PRICING"
- **Background**: Dark with background image/pattern

### Trust Section
- **Title**: "TRUSTED BY INDUSTRY LEADERS"
- **Logos**: Company logos in grayscale (Concussion, Pacha, MAGA, WES, Converso, etc.)
- **Layout**: Horizontal scroll/grid of partner logos

### What We Do Section
- **Section Title**: "WHAT WE DO" (orange accent)
- **Headline**: "Improving your workflow"
- **Description**: "A feugiat lectus ut nunc congue et vel ornare."
- **Navigation**: Previous/Next arrows for content

### Benefits Cards
Three main benefit cards with illustrations:

1. **Lower Costs**
   - Icon: Descending boxes with dollar sign
   - Text: "Cut operational expenses by automating repetitive tasks. Allocate your budget more efficiently for growth."

2. **Easier to scale your operations**
   - Icon: Growth chart with upward trend
   - Text: "Quickly adapt to growing demands without hiring more staff. Automation makes it simple to expand."

3. **24/7 availability**
   - Icon: Clock/gauge interface
   - Text: "Provide round-the-clock support without increasing costs. Never miss a customer interaction."

## Component Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TrustSection.tsx
│   ├── WhatWeDo.tsx
│   ├── BenefitCard.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Badge.tsx
└── lib/
    └── utils.ts
```

## Styling Guidelines

### Color Palette
- **Primary Dark**: `bg-slate-900` or similar
- **Primary Orange**: `bg-orange-500` or `text-orange-500`
- **Text Light**: `text-white`
- **Text Secondary**: `text-gray-300`
- **Card Background**: `bg-gray-800` or `bg-slate-800`

### Typography
- **Headlines**: Use `text-4xl` to `text-6xl` with `font-bold`
- **Subheadings**: Use `text-xl` to `text-2xl` with `font-medium`
- **Body Text**: Use `text-base` to `text-lg` with `text-gray-300`

### Spacing
- **Sections**: Use `py-16` to `py-24` for vertical spacing
- **Containers**: Use `max-w-7xl mx-auto px-4` for content width
- **Cards**: Use `p-6` to `p-8` for internal padding

### Components
- **Buttons**: Rounded corners (`rounded-lg`), proper padding (`px-6 py-3`)
- **Cards**: Subtle borders, rounded corners, proper shadows
- **Icons**: Consistent sizing, proper alignment

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Implementation Priority

1. **Header Component** - Navigation and branding
2. **Hero Section** - Main value proposition
3. **Trust Section** - Social proof with logos
4. **What We Do Section** - Service overview
5. **Benefits Cards** - Key value propositions
6. **Responsive optimization** (after desktop layout is complete)

## Assets Needed

- Company logo (SVG preferred)
- Partner company logos
- Benefit card illustrations/icons
- Background patterns/images
- Proper font loading (if not using system fonts)

## Notes

- Focus on pixel-perfect implementation matching the provided layout
- Ensure proper semantic HTML structure
- Optimize for performance with Next.js features
- Consider accessibility standards in implementation
- Test thoroughly across different screen sizes after desktop completion
