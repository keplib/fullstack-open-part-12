FROM node:20

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci --omit=dev

CMD npm start