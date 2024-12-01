FROM node as development

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]

# Run this on production only

FROM node as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

RUN npm run build


CMD ["node", "dist/server.js"]
