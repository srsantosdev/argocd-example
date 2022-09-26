FROM node:latest

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .
EXPOSE 3333
CMD ["yarn", "start"]