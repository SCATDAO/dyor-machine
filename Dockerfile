FROM node:latest as build-stage
WORKDIR /dyor-machine
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest  as production-stage
COPY --from=build-stage /dyor-machine/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY cert.pem /etc/nginx/ssl/cert.pem
COPY key.pem /etc/nginx/ssl/key.pem
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
