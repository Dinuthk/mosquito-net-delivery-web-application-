# Get the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code
COPY . .

# Expose the port
EXPOSE 4000

# Start the application
CMD ["npm", "run", "server"]
