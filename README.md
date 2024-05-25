# RUN PROJECT

compose.yml contain the services
db - postgres
pgadmin - postgres interface administrator

just use the command

`docker-compose up --build -d`

if u needs to whatch the container can use the command

`docker exec -it container_name sh`

you may to check the container name in docker compose on container_name variable or run

`docker ps` // whats the NAMES it to reference to docker container name

# Specifications

## pgadmin administration

open your browser and lets it url

`localhost:5050` // Rest of variables you need can find it in docker compose file

**variables**

```
POSTGRES_USER: *
POSTGRES_PASSWORD: *
POSTGRES_DB: *
PGUSER: *
```

## database

the database is working in port

`localhost:5432` // Rest of variables you need can find it in docker compose file

**variables**

```
PGADMIN_DEFAULT_EMAIL: *
PGADMIN_DEFAULT_PASSWORD: *
```

## Backend

the prisma conection you can find it inside backend folder and .env.example file
