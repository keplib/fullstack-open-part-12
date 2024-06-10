FROM node:20 AS test-stage

WORKDIR /usr/src/app
COPY . .

RUN npm ci

RUN CI=true npm test

FROM test-stage AS build-stage

WORKDIR /usr/src/app

COPY . .
ENV VITE_BACKEND_URL="http://localhost:3001/"
RUN npm ci

RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
