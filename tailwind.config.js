module.exports = {
    purge: [],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'red': '#f56c6d',
            },
            backgroundColor: {
                'dark': '#2c2d30',
                'light': '#f3f5f8',
                'body-light': '#f1f3f6',
                'red': '#f56c6d',
            },
            boxShadow: {
                'light-inner': 'inset 3px 3px 3px #cdcdcd, inset -3px -3px 3px #fafafa, 0px 0px 0px #cdcdcd, 0px 0px 0px #fafafa',
                'light-outer': 'inset 0px 0px 0px #cdcdcd, inset 0px 0px 0px #fafafa, 3px 3px 3px #cdcdcd, -3px -3px 3px #fafafa',
                'dark-inner': 'inset 3px 3px 3px #202125, inset -3px -3px 3px #353535, 0px 0px 0px #202125, 0px 0px 0px #353535',
                'dark-outer': 'inset 0px 0px 0px #202125, inset 0px 0px 0px #353535, 3px 3px 3px #202125, -3px -3px 3px #353535',
            },
            height: {
                '160': '40rem',
            },
            width: {
                '0%': '0%',
                '5%': '5%',
                '10%': '10%',
                '15%': '15%',
                '20%': '20%',
                '25%': '25%',
                '30%': '30%',
                '35%': '35%',
                '40%': '40%',
                '45%': '45%',
                '50%': '50%',
                '55%': '55%',
                '60%': '60%',
                '65%': '65%',
                '70%': '70%',
                '75%': '75%',
                '80%': '80%',
                '85%': '85%',
                '90%': '90%',
                '95%': '95%',
                '100%': '100%',
            }
        },
    },
    variants: {
        extend: {
            boxShadow: ['dark'],
            darkMode: ['focus'],
            flexDirection: ['direction'],
            margin: ['direction'],
            inset: ['direction'],
            response:['direction'],
            borderWidth:['direction'],
            rotate:['direction'],
            textAlign:['direction'],
        },
    },
    plugins: [
        require('tailwindcss-dir')(),
    ],
}
