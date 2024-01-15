# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build your Next.js application
RUN npm run build

# Define the command to run your app
CMD [ "npm", "start" ]