# Clarke Challenge

Fullstack application that recommends electricity suppliers based on the user's monthly energy consumption.

---

## ✅ Prerequisites

Before running the project, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) – Recommended to use with [NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)

---
## Informations

### Application on EC2

You can access the application through the following URL, hosted on EC2 instance:
```bash
https://clarkefornecedores.listaperfeita.com/suppliers
```

### CI/CD Pipeline
The project is configured with CI/CD using GitHub Actions workflows. The CI pipeline automatically builds and deploys the project to an EC2 instance whenever there is a push to the main branch. This includes the following steps:

1. Pull the latest changes from the main branch.
2. Install backend and frontend dependencies.
3. Build Docker images for the backend, frontend, and database.
4. Start the services in Docker containers on the EC2 instance.

The GitHub Actions workflow configuration ensures that the deployment is automatic and happens seamlessly whenever there are changes pushed to the main branch.

### HUSKY

There is a pre commit for each commit, where the unit tests will run.

## ⚙️ Environment Setup

### Step 1 – Use the correct Node version

If you're using NVM:

```bash
nvm use
```
### Step 2 – Install dependencies

Navigate to the `apps/api` directory and install dependencies:

  ```bash
  cd apps/api
  yarn
  ```

Navigate to the project root and then to the `apps/web` directory and install dependencies:

```bash
  cd apps/web
  yarn
  ```


### Step 3 – Set up the environment variables

There are **two `.env` files** used in this project:

1. `.env` in the **project root** – Used by Docker (`docker-compose.yml`) to configure services like MySQL.  
2. `.env` inside `apps/api` – Used by the **NestJS backend** to connect to the database.

---

#### Root and API `.env` – used by Docker Compose and NestJS

There are **two `.env` files** to configure for the project. Follow these steps:

1. **For the root `.env` file** (used by Docker Compose):

   Create the file in the root directory of the project:

   ```bash
   cp .env.example .env
    ```
2. **For the `.env` file** inside apps/api (used by the NestJS backend):

  Navigate to the apps/api directory and create the file there:

  ```bash
  cd apps/api
  cp .env.example .env
  ```

## 🐳 Running the Project with Docker

This project runs using Docker Compose with:

- ✅ `clarke-api` – NestJS backend with GraphQL
- ✅ `clarke-web` – Next.js frontend with Apollo
- ✅ `clarke-mysql` – MySQL database

### Step 1 – Navigate to the project root and build all Docker containers 

```bash
yarn docker:dev:build
```

### Step 2 – Start the services

```bash
yarn docker:dev
```

### Step 3 – Run migrations

If you haven't run the migrations yet, follow these steps:

1. **Open a new terminal window** – Make sure your Docker containers are still running.
2. **Navigate to the project root** – Make sure you are in the root directory of the project where the `docker-compose.yml` file is located.
3. **Run the migrations** – Execute the following command to apply the migrations to the MySQL database running inside the Docker container:

```bash
yarn docker:migration:up
```

### Step 4 – Run seeders

If you haven't run the seeders yet, follow these steps:

1. **Open a new terminal window** – Make sure your Docker containers are still running.
2. **Navigate to the project root** – Make sure you are in the root directory of the project where the `docker-compose.yml` file is located.
3. **Run the seeders** – Execute the following command to apply the seeders to insert datas in MySQL database Docker container:

```bash
yarn docker:seed:run
```

### Step 5 – Run the application on localhost

After running the services and migrations, you can access the application locally.

1. **Ensure the services are still running** – Make sure that the Docker containers are up and running by executing `yarn docker:dev`.
2. **Open your browser** – Once the services are running, go to the following URL:

```bash
http://localhost:3000
```
