DEBBIE O'BREIN- REACT GIRL
# introduction 
Ecommerce Project with React and vite, NodeJs and MongoDB and tailwindcss
built with context api and redux

# tailwind installation
npm create vite@latest my-project -- --template react
cd my-project

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

<!-- tailwind.config.js -->
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

<!-- index.css -->
@tailwind base;
@tailwind components;
@tailwind utilities;


# data for makeup
https://makeup-api.herokuapp.com/
https://jsonformatter.org/json-viewer
https://github.com/PMGH/makeup/blob/master/src/components/FilterByButton.jsx#L12

# new features to be added
filter on products page
keep making it responsive for all screens
make products clickable
improve performance with unique way
add securtity to this project
start using jest

# let's make this project as a template to upload for pay
on theeme forest 

# using google font in react project
To use Google Fonts in your React project, follow these steps:
Visit the Google Fonts website.
Choose your desired font(s) and click on the + Select this font button.
In the panel that appears, you'll see a link to include in your HTML.
Open the public/index.html file in your React project.
In the <head> section of the HTML file, add the link to the Google Fonts CDN with the desired font family.
You can now use the font in your CSS code like this:

https://fonts.google.com/
# more features of tailwindcsss - don't forget to install the library
https://flowbite.com/docs/getting-started/introduction/
https://tailwindui.com/components/application-ui/elements/buttons 


# deploy
https://github.com/ErickKS/vite-deploy
https://github.com/actions/setup-node
https://vitejs.dev/guide/static-deploy#github-pages


# next goal- to create custom theme project
https://debbie.codes/blog/theming-in-react/
https://debbie.codes/videos
- # theme builder
https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/

- # next js tutorial
https://www.youtube.com/results?search_query=atino+next+js

# next would be live streaming app
