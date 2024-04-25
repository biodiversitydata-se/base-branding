# This file is primarily for building the production image

FROM nginx:1.25
ENV TZ=Europe/Stockholm
COPY public /usr/share/nginx/html
