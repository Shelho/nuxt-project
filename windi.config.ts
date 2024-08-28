module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}'
    ],
    shortcuts: {
        circle: 'w-48px h-48px bg-white flex justify-center items-center rounded-1/2 text-regular-0 cursor-pointer hover:(bg-regular-0 text-white) transition-all'
    },
    theme: {
        extend: {
            backgroundImage: {
                // 'sert-desc': "url('@/assets/images/sections/5/bg-desc.png')"
            },
            fontFamily: {
                // mulish: ['Mulish', 'sans-serif'],
            },
            colors: {
                transparent: 'transparent',
                regular: {
                    0: '#172147',
                },
            },
        },
        container: {
            center: true,
            padding: {
                'DEFAULT': '15px',
                'lg': '20px',
            }
        },
        borderRadius: {
        },
        boxShadow: {
            // 0: '0px 1px 2px 0px rgba(0, 0, 0, 0.20), 0px 0.1px 0.3px 0px rgba(0, 0, 0, 0.10)',
        },
        spacing: {
        },
        backgroundImage: {
            // 1: 'linear-gradient(125.67deg, #EBF3FA -15.25%, #C5E1FA 55.35%)',
        }
    },
    plugins: [
        require('windicss/plugin/line-clamp'),
    ]
}
