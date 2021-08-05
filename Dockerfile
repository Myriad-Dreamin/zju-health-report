FROM node:16-alpine

COPY dist/ /app/dist
COPY LICENSE /app/
COPY package.json /app/
COPY README.md /app/
COPY node_modules /app/node_modules

WORKDIR /app
CMD [ "node", "dist/main.js" ]
