FROM nginx:latest
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/ca.footeware.ng.web/browser /usr/share/nginx/html/browser
EXPOSE 80