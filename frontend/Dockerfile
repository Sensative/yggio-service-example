FROM node:lts-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . ./

EXPOSE 5000

CMD [ "yarn", "start" ]
