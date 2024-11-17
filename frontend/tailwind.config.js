/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        
        colors: {
            'black': '#242424',
            'white':'#ffffff',
            'grey': '#F3F3F3',
            'dark-grey': '#6B6B6B',
            'bg' : '#ffffff',
            'primary' : '#8685EF',
            'text' : '#FAF8FF',
            'secondary' : '#E3E0F3',
            
        },

        fontSize: {
            'sm': '12px',
            'base': '14px',
            'xl': '16px',
            '2xl': '20px',
            '3xl': '28px',
            '4xl': '38px',
            '5xl': '50px',
        },

        extend: {
            fontFamily: {
              inter: ["'Inter'", "sans-serif"],
              gelasio: ["'Gelasio'", "serif"],
              header: ['Niramit']
            },
            boxShadow : {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            keyframes : {
                display_item : {
                    '0%' :{opacity : '0'},
                    '10%' :{opacity : '10'},
                    '20%' :{opacity : '20'},
                    '30%' :{opacity : '30'},
                    '40%' :{opacity : '40'},
                    '50%' :{opacity : '50'},
                    '60%' :{opacity : '60'},
                    '70%' :{opacity : '70'},
                    '80%' :{opacity : '80'},
                    '90%' :{opacity : '90'},
                    '100%' :{opacity : '100'},
                }
            }
        },

    },
    plugins: [],
};