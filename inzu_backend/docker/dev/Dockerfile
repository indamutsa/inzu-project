FROM python:3.6

# Confitguring the entrypoint command
COPY ./inzu_backend/docker/dev/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy the local codebase into docker container
COPY ./inzu_backend /inzu_backend

# Declaring the working directory
WORKDIR /inzu_backend

#Installing the requirements
RUN pip install -r requirements/dev.txt

# Poibt to our entrypoint script
ENTRYPOINT ["/entrypoint.sh"]