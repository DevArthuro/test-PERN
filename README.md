# Tecnologies used

- **node**
- **docker and compose**
- **next**
- **postgres and pgadmin**
- **Prisma**
- **Tailwind**

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

before you run the backend you should to execute the command the generate prisma

like this
`npx prisma generate` but this already running in dockerfile

If u want a front to watch the data run this command

`docker exec -it backend npx prisma studio` // Run this command when the container is running

# Migration

You must to run the migration for the correctly functionality it does with next command

**If you uses docker**
`docker exec -it backend npx prisma migrate dev --name init` // Inside the container the container_name is the name of container backed registred

**If you not use docker**
`npx prisma migrate dev --name init` // container_name is the name of container backed registred
