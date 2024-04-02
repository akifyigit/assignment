# Prerequisites

Make sure you have Docker installed on your machine. Docker is a platform for developing, shipping, and running applications in containers. You can download and install Docker from here.

# Docker Repository

The Docker image for this project is available on Docker Hub. You can find it at akifyigit/assignment.

# Running the Application

Pull the Docker Image: Open a terminal and execute the following command to download the Docker image to your local machine:

docker pull akifyigit/assignment

This command retrieves the latest version of the application's Docker image from Docker Hub.

# Start the Docker Container:

Once the image is downloaded, you can start the application by running the following command:

docker run -p 3000:3000 akifyigit/assignment

# Access the Application:

Once the container is running, you can access the application by opening a web browser and navigating to http://localhost:3000

# Stop the application:

You can write this to the terminal:

docker stop akifyigit/assignment
