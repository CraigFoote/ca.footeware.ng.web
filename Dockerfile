# dockerfile
FROM nginx:latest
# use my conf
COPY ./nginx.conf /etc/nginx/nginx.conf
# copy over angular app
COPY ./dist/ca.footeware.ng.web/browser /usr/share/nginx/html/browser
# not sure this is needed
RUN mkdir -p /etc/letsencrypt/live/footeware.ca
EXPOSE 443