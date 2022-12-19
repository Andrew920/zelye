FROM node

WORKDIR /expressjs
COPY . .

RUN npm install
RUN npm install -g nodemon

CMD ["npm", "start"]

EXPOSE 5000