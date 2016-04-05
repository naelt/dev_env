FROM ubuntu:14.04
MAINTAINER Nael Tasmim "naeltasmim@yahoo.de"
ENV REFRESHED_AT 2016-04-05

ARG DEBIAN_FRONTEND=noninteractive
# Avoid ERROR: invoke-rc.d: policy-rc.d denied execution of start.
RUN echo "#!/bin/sh\nexit 0" > /usr/sbin/policy-rc.d

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get upgrade
RUN apt-get -yqq update 
RUN apt-get install -y -q --no-install-recommends \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    g++ \
    gcc \
    make \
    sudo \
    wget \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get -y autoclean

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 5.10.0

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly so we don't have to long-reference npm, node, &c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

<<<<<<< HEAD
#VOLUME ["/home/core/share"]
=======
VOLUME ["/home/core/share"]
>>>>>>> 37757f7fe93c57e7bc340fbe197c7b391936995c

RUN npm install -g grunt-cli

ADD data /var/app/livereload
RUN cd /var/app/livereload && npm install

EXPOSE 35729

WORKDIR /var/app/livereload
CMD ["grunt"]
