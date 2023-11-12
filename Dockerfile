FROM node:14.17.0-alpine

# Set a working directory
WORKDIR /usr/src/app

# Copy package files to the container
COPY package*.json ./

# Update npm to a compatible version
RUN npm install -g npm@7

# Install package dependencies
RUN npm install --no-optional --legacy-peer-deps

# Copy the rest of the code to the container
COPY . .

EXPOSE 5173

# Build for production and start the application
CMD ["npm", "run", "dev"]
