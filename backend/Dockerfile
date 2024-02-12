FROM node:20.11-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV key=value
EXPOSE 4040
CMD [ "npm", "start"]