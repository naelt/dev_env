FROM ubuntu:14.04
MAINTAINER Nael Tasmim "naeltasmim@yahoo.de"
ENV REFRESHED_AT 2015-03-30

ARG DEBIAN_FRONTEND=noninteractive
# Avoid ERROR: invoke-rc.d: policy-rc.d denied execution of start.
RUN echo "#!/bin/sh\nexit 0" > /usr/sbin/policy-rc.d

RUN apt-get upgrade -y
RUN apt-get -yqq update && apt-get -yqq install nginx

RUN mkdir -p /var/www/html/website
#VOLUME ["/var/www/html"]
#WORKDIR /var/www/html

ADD nginx/global.conf /etc/nginx/conf.d/
ADD nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
