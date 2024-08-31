FROM node:16-alpine
WORKDIR /app
Copy package*.json ./
COPY . .
EXPOSE 8080
RUN npm install
CMD ["npm", "start"]
