# This file is primarily for building the production image

FROM nginx:1.28
ENV TZ=Europe/Stockholm
COPY public /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
