FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm i -g @angular/cli

RUN npm install

RUN ng build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/exam-project/browser /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf