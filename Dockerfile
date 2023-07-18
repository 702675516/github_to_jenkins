FROM node:18-alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.cloud.tencent.com/g' /etc/apk/repositories
RUN apk update
RUN apk add build-base libsass-dev python3 nano p7zip neofetch
RUN npm config set registry https://registry.npm.taobao.org
RUN npm i -g pm2
RUN npm i -g serve
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
COPY . .