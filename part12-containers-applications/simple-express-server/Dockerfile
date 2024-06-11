FROM node

WORKDIR /usr/src/app

COPY . . 

RUN npm ci --omit=dev
CMD DEBUG=simple-express-server:* npm start