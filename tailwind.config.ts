import type { Config } from 'tailwindcss'
// import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    darkMode: ['selector', '[class="dark-mode"]'],
    theme: {
        extend: {
            // colors: {
            //     primary: colors.green
            // }
        }
    },
    plugins: [require('tailwindcss-primeui')]
}