mongodb://: This is the protocol that tells the client (Node.js, for example) to use MongoDB to handle the connection.

MongoDB connection string starts with mongodb:// or mongodb+srv:// for SRV records.

mongo: This is the hostname or service name of the MongoDB container. 

In Docker Compose, services communicate over a custom network by their service names

services:
  mongo:
    image: mongo:latest

Docker automatically sets up internal DNS resolution so that any container in the same network can access the MongoDB container using the name mongo. 

You don't need to use localhost or an IP address when you're inside a Docker network

ports:

  - "27017:27017"

This is the port that MongoDB is listening .

Summary:

    mongodb://: Specifies MongoDB as the protocol.

    mongo: The hostname (or service name) of the MongoDB container in Docker.
    
    :27017: The port on which MongoDB listens.
    
    /Demo: The name of the MongoDB database you are connecting to