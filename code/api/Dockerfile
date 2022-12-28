FROM node:latest as build-stage

WORKDIR /app

COPY ./client/package.json ./
COPY ./client/yarn.lock ./

RUN yarn install
COPY ./client .
RUN yarn build


FROM node

WORKDIR /expressjs
COPY ./api .

RUN npm install
RUN npm install -g nodemon

COPY --from=build-stage /app/build ./public/build

CMD ["npm", "start"]

EXPOSE 5000