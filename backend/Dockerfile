FROM node:12-slim

RUN mkdir -p /app
WORKDIR /app

# copying all the files from your file system to container file system
COPY package.json .

# install all dependencies
RUN yarn
# copy oter files as well
COPY ./ .

# command to run when intantiate an image
CMD ["yarn", "start"]
