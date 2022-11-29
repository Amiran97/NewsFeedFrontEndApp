FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/front-end /usr/share/nginx/html
EXPOSE 80