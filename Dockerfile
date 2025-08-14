# Simple but better version
FROM node:18-alpine

WORKDIR /app

# Install all deps for build, then prune dev after
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build and then remove devDependencies
RUN npm run build && npm prune --omit=dev

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]