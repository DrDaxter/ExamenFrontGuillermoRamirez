FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm i -g @angular/cli@17.0.0

RUN npm install

RUN ng build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/exam-project /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./nginx/cert.pem /etc/nginx/cert.pem

COPY ./nginx/key.pem /etc/nginx/key.pem