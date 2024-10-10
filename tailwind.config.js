/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './js/**/*.{html,js}',
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