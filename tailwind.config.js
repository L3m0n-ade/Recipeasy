import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#FFB347',
                'primary-lt': '#FFDD88',
                'primary-dk': '#C47924',
                'primary-mt': '#E7DDCD',

                'secondary': '#A24F25',
                'secondary-lt': '#C78054',
                'secondary-dk': '#6B3A1B',
                'secondary-mt': '#985931',

                'accent': '#98CAA3',
                'accent-lt': '#CCF2C8',
                'accent-dk': '#4E7D6A',
                'accent-mt': '#C0D5C4',

                'neutral': '#C9B396',
                'neutral-lt': '#E9D2B3',
                'neutral-dk': '#9D8360',
                'neutral-mt': '#B0A699',

                'info': '#D9E4DC',
                'info-lt': '#F0F6F2',
                'info-dk': '#BAC5C0',
                'info-mt': '#CECECE',

                'bg': '#FFFBF8',
                'bg-lt': '#FFFFFF',
                'bg-dk': '#FBEFE6',
                'bg-mt': '#F6F0EB',

                'dark': '#3E281B',
                'dark-lt': '#5E4435',
                'dark-dk': '#1F1109',
                'dark-mt': '#67584F',
            }
        },
    },

    plugins: [forms],
};
