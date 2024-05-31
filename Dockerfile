# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

# The app is served on port 3000
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist"]