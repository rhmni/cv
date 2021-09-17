const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: 'class',
    theme: {
        boxShadow: {
            'light-inner': 'inset 3px 3px 3px #cdcdcd, inset -3px -3px 3px #fafafa, 0px 0px 0px #cdcdcd, 0px 0px 0px #fafafa',
            'light-outer': 'inset 0px 0px 0px #cdcdcd, inset 0px 0px 0px #fafafa, 3px 3px 3px #cdcdcd, -3px -3px 3px #fafafa',
            'dark-inner': 'inset 3px 3px 3px #202125, inset -3px -3px 3px #353535, 0px 0px 0px #202125, 0px 0px 0px #353535',
            'dark-outer': 'inset 0px 0px 0px #202125, inset 0px 0px 0px #353535, 3px 3px 3px #202125, -3px -3px 3px #353535',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'dark': '#2c2d30',
            'light': '#f3f5f8',
            'body-light': '#f1f3f6',
            'red': '#f56c6d',
        }),
        colors: {
            ...colors,
            'red': '#f56c6d',
        },
        extend: {},
    },
    variants: {
        extend: {
            boxShadow: ['dark'],
        },
    },
    plugins: [],
}
