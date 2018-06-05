FROM node:8.11.1-alpine
WORKDIR /app/
COPY package.json yarn.lock ./
RUN ["npm", "install"]
COPY . .
ENV HOST=0.0.0.0 PORT=8070 NODE_ENV=production
EXPOSE 8070
CMD ["node", "app.js"]