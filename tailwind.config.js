/** @type {import('tailwindcss').Config} */
const withOpacityValue = (variable) => {
   return ({ opacityValue }) => {
      console.log(opacityValue)
      console.log(variable)
      if (opacityValue === undefined) {
         return `rgba(var(${variable}))`
      }
      return `rgba(var(${variable}) / ${opacityValue})`
   }
}

module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "rgb(var(--color-primary) / <alpha-value>)",
            contrast: withOpacityValue("--color-contrast"),
            accent: withOpacityValue("--color-accent"),
            "accent-to-gradient": "var(--color-accent-to-gradient)",
         },
         // Example
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
   },
   plugins: [],
}
