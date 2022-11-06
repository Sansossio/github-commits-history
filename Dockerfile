FROM node:18 as build-stage

WORKDIR /app

COPY . .

RUN yarn install --dev-dependencies
RUN yarn build:package

FROM node:18 as deploy-stage

WORKDIR /app

COPY --from=build-stage /app/dist/apps/api .

RUN yarn install --production

CMD ["node", "main.js"]
