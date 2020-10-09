FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./inzu_backend/docker/prod/nginx/inzu_nginx.conf /etc/nginx/conf.d/

RUN mkdir -p /media/
RUN mkdir -p /static/

WORKDIR /media
RUN chown -R nginx:nginx /media
RUN chmod -R 777 /media

WORKDIR /static
RUN chown -R nginx:nginx /static
RUN chmod -R 777 /static

#COPY ./inzu_backend/inzu/static /static/
#COPY ./inzu_backend/inzu/media /media/

