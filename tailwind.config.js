/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // ← مهم جدًا لفحص الكلاسات الموجودة في html
    "./src/**/*.{js,jsx}", // ← طالما مش بتستخدم ts ولا tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
