FROM node:20.9.0-alpine3.18

WORKDIR /app

COPY package*.json .

RUN npm i

COPY prisma ./prisma

COPY . .

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]