FROM nginx:latest
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/ca.footeware.ng.web /usr/share/nginx/html
EXPOSE 80 80