FROM node:latest

WORKDIR /app/my-portfolio-app

COPY ./src/my-portfolio-app/package*.json ./
COPY ./src/my-portfolio-app .

RUN echo "module.exports = { \
purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], \
darkMode: false, \
theme: { \
    extend: {}, \
}, \
variants: { \
    extend: {}, \
}, \
plugins: [], \
}" > tailwind.config.js

RUN echo "@tailwind base; \
@tailwind components; \
@tailwind utilities;" > src/index.css
