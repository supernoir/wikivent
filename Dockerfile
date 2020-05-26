FROM node:12-alpine

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD ["node","api/index.ts"]
