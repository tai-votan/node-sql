FROM node:16.20.0 as builder

# Set the Current Working Directory inside the container
WORKDIR /app

# Install ts
RUN npm install -g typescript

# Copy package.json first, for caching deps
COPY package.json yarn.lock ./

# Install
RUN yarn --ignore-optional

# Copy data to working dir
COPY . .

CMD npm run dev