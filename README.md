# Github commits history

This application is deployed in Heroku, url [https://github-commits-history.herokuapp.com/](https://github-commits-history.herokuapp.com/)

## Environment variables
### Autogenerate

This command generates all ".env files" needed, if already exists any .env it will be replaced by the environment variables describes in README.md.

```sh
yarn tools:env:create
```

## Run application

### Docker
To run the application using docker you must follow the next steps
- Create .env files on each application (read *environment variables section* section)
- Run `docker-compose up`

That's all, then you can go to the application in http://localhost:3333

### Locally
To run the application, you must follow the next steps:

- Create .env files on each application (read *environment variables section* section)
- Install dependencies using yarn: `yarn install` or just `yarn`
- Start application: `yarn start:all`

#### Applications url
After run all applications, you can go to the follow urls:
| App  |  Url | 
|---|---|
| Api | http://localhost:3333/api |
| Frontend | http://localhost:4200 |### Local environment requeriments

#### Local environment requeriments

- NodeJS

## Applications

### API
This application is the only backend service of this project, is in charge of collecting all the info from github.
For more information click [here](./apps/api)

### Frontend
Visual application, for more information click [here](./apps/frontend)

## Technologies used

- NodeJS
- NestJS
- React
- Docker
