FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

# Bundle app source
COPY ../ .

EXPOSE 3000
CMD [ "yarn", "start" ]