FROM node:18-alpine3.18

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY build/ ./

CMD [ "node", "." ]

