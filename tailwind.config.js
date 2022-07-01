const withOpacityValue =
    (variable) =>
    ({ opacityValue }) =>
        `rgba(var(${variable}), ${opacityValue || 1})`;

module.exports = {
    plugins: [require('@tailwindcss/line-clamp')],
    future: {
        purgeLayersByDefault: true,
        applyComplexClasses: true,
    },
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
        options: {
            safelist: {
                standard: ['outline-none'],
            },
        },
    },
    theme: {
        extend: {
            maxWidth: {
                narrowest: '900px',
                narrow: '1270px',
                wide: '1485px',
            },
            colors: {
                primary: 'var(--primary)',
                'primary-2': 'var(--primary-2)',
                secondary: 'var(--secondary)',
                'secondary-2': 'var(--secondary-2)',
                hover: 'var(--hover)',
                'hover-1': 'var(--hover-1)',
                'hover-2': 'var(--hover-2)',
                'accent-0': 'var(--accent-0)',
                'accent-1': 'var(--accent-1)',
                'accent-2': 'var(--accent-2)',
                'accent-3': 'var(--accent-3)',
                'accent-4': 'var(--accent-4)',
                'accent-5': 'var(--accent-5)',
                'accent-6': 'var(--accent-6)',
                'accent-7': 'var(--accent-7)',
                'accent-8': 'var(--accent-8)',
                'accent-9': 'var(--accent-9)',
                blue: 'var(--blue)',
                'blue-2': 'var(--blue-2)',
                'blue-3': 'var(--blue-3)',
                'blue-4': 'var(--blue-4)',
                red: 'var(--red)',
                'red-2': 'var(--red-2)',
                'red-3': 'var(--red-3)',
                yellow: 'var(--yellow)',
                violet: 'var(--violet)',
                'violet-light': 'var(--violet-light)',
                'violet-dark': 'var(--violet-dark)',
                pink: 'var(--pink)',
                'pink-light': 'var(--pink-light)',
                cyan: 'var(--cyan)',
                green: 'var(--green)',
                'neutral-1': withOpacityValue('--neutral-1'),
                'neutral-2': withOpacityValue('--neutral-2'),
            },
            backgroundColor: {
                black: withOpacityValue('--bg-black'),
                blue: withOpacityValue('--bg-blue'),
            },
            textColor: {
                primary: withOpacityValue('--text-primary'),
                secondary: withOpacityValue('--text-secondary'),
                'neutral-1': withOpacityValue('--neutral-1'),
                'neutral-2': withOpacityValue('--neutral-2'),
            },
            fill: {
                primary: 'rgba(var(--text-primary), var(--tw-text-opacity))',
                secondary: 'rgba(var(--text-secondary), var(--tw-text-opacity))',
                'bg-black': 'var(--bg-black)',
            },
            boxShadow: {
                'outline-normal': '0 0 0 2px var(--accent-2)',
                magical:
                    'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
            },
            fontFamily: {
                sans: '"Inter","Helvetica Neue",HelveticaNeue,"TeX Gyre Heros",TeXGyreHeros,FreeSans,"Nimbus Sans L","Liberation Sans",Arimo,Helvetica,sans-serif',
            },
            fontSize: {
                html: '15px',
                xs: [
                    '0.7333rem',
                    {
                        letterSpacing: '-0.01818em',
                        lineHeight: '1.2727',
                    },
                ], // 11px
                sm: [
                    '0.8666rem',
                    {
                        letterSpacing: '-0.0154em',
                        lineHeight: '1.3846',
                    },
                ], // 13px
                base: [
                    '1rem',
                    {
                        letterSpacing: '-0.0333em',
                        lineHeight: '1.3333',
                    },
                ], // 15px
                lg: [
                    '1.1333rem',
                    {
                        letterSpacing: '-0.0394em',
                        lineHeight: '1.47',
                    },
                ], // 17px
                xl: [
                    '1.3333rem',
                    {
                        letterSpacing: '-0.04em',
                        lineHeight: '1.25',
                    },
                ], // 20px
                '2xl': [
                    '1.5333rem',
                    {
                        letterSpacing: '-0.0435em',
                        lineHeight: '1.13',
                    },
                ], // 23px
                '3xl': [
                    '1.8rem',
                    {
                        letterSpacing: '-0.0185em',
                        lineHeight: '1.185',
                    },
                ], // 27px
                '4xl': [
                    '2.5333rem',
                    {
                        letterSpacing: '-0.0342em',
                        lineHeight: '1.158',
                    },
                ], // 38px
                '5xl': [
                    '3.6666rem',
                    {
                        letterSpacing: '-0.0564em',
                        lineHeight: '1.09',
                    },
                ], // 55px
                '6xl': [
                    '5.1333rem',
                    {
                        letterSpacing: '-0.056em',
                        lineHeight: '1.09',
                    },
                ], // 77px
            },
            lineHeight: {
                tighter: '1.09',
                tight: '1.13',
                snug: '1.185',
                normal: '1.25',
                relaxed: '1.2727',
                loose: '1.3846',
                looser: '1.471',
            },
            scale: {
                120: '1.2',
            },
            width: {
                '9/12': '75%',
            },
            height: {
                '9/12': '75%',
            },
            zIndex: {
                'feature-bar': 900,
                'categories-drawer': 800,
                modal: 700,
                'lang-selector': 600,
                'header-navbar': 500,
                'header-mobile-nav': 400,
                header: 300,
                'sticky-bar': 200,
                intercom: 100,
            },
            transitionProperty: {
                visibility: 'visibility',
                'max-height': 'max-height',
            },
            spacing: {
                5.5: '1.333rem',
                10.5: '2.666rem',
                14.5: '3.666rem',
            },
        },
    },
    variants: {
        extend: {
            scale: ['active'],
        },
    },
};
