FROM node:lts-alpine AS build
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

FROM nginx:stable-alpine as production-stage
# COPY --from=build /frontend/.nuxt/dist /usr/share/nginx/html
COPY --from=build /frontend/.output/public /usr/share/nginx/html
EXPOSE 80