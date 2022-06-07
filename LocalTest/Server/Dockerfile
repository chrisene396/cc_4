#!/bin/bash

FROM node:alpine

RUN mkdir -p /usr/src/Server


WORKDIR /usr/src/Server

COPY package.json /usr/src/Server/

RUN npm install

COPY . /usr/src/Server

EXPOSE 3000

CMD ["node", "server.js"]