/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}',
        './index.html',
        './journal.html',
    ],
    theme: {
        extend: {}
    },
    plugins: [
        require('daisyui'),
    ],
}