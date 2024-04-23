# Use the Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI locally
RUN npm install -g @angular/cli@latest

# Copy the rest of the application code into the working directory
COPY . .

# Expose the port the Angular application will run on
EXPOSE 4200

# Start the Angular application with live reloading
CMD ["ng", "serve", "--host", "0.0.0.0"]