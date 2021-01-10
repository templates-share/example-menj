FROM node:alpine

WORKDIR /usr/app

LABEL version="1.0" description="api-example"

COPY package*.json ./

COPY . .

EXPOSE 3777

CMD ["npm", "start"]