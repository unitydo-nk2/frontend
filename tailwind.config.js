/**
 * @format
 * @type {import('tailwindcss').Config}
 */

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}'
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        primary: 'DB Heavent'
      },
      colors: {
        'unityDo-primary': '#5628FF',
        'unityDo-primary-light': '#EDE8FF',
        'unityDo-deep-grey': '#323335',
        'unityDo-light-grey': '#ECEAE9',
        'unityDo-middle-grey': '#C0C0C0',
        'unityDo-royal-blue': '#937AFF',
        'unityDo-yellow': '#F8DB45',
        'unityDo-green': '#15B823',
        'unityDo-cyan': '#6E6B6B',
        'unityDo-red': '#DB2323',
        'unityDo-pink': '#FF3D9A',
        'unityDo-black': '#161616'
      }
    }
  },
  plugins: []
}