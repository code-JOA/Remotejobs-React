/** @type {import('tailwindcss').Config} */
// export default {
  export const content = [
  "./index.html",
  "./src/**/*.{js,jsx}",
];
export const theme = {
  extend: {
    colors: {
      'blueColor': '#2a68ff',
      'greyIsh': '#f1f4f8',
      'cardShadow': '#f7f8f9',
      'textColor': '#252b36',
    }
  },
};
export const plugins = [];

