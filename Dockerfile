FROM node:14-alpine as builder

RUN mkdir /opt/app && chown -R node:node /opt/app
WORKDIR /opt/app

COPY --chown=node:node package*.json ./
USER node

RUN npm install

COPY --chown=node:node src/ /opt/app/src/
COPY --chown=node:node tsconfig.json ./

RUN npm run build


FROM node:14-alpine

RUN mkdir /opt/app && chown -R node:node /opt/app
WORKDIR /opt/app

COPY --from=builder --chown=node:node /opt/app/package*.json ./
USER node

RUN npm install

COPY --from=builder --chown=node:node /opt/app/dist/ /opt/app/dist/

CMD ["npm", "run", "start"]
