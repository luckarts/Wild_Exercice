FROM node:10.15.3-jessie


COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npm", "start"]
