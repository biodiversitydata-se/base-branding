# This file is primarily for building the production image

FROM nginx
COPY public /usr/share/nginx/html
