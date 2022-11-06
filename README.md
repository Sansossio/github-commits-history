# Github commits history

## Run application
To run the application, you must follow the next steps:

- Create .env files on each application (read next section)
- Install dependencies using yarn: `yarn install` or just `yarn`
- Start application: `yarn start:all`

### Local environment requeriments

- NodeJS

## Environment variables
### Autogenerate

This command generates all ".env files" needed, if already exists any .env it will be replaced by the environment variables describes in README.md.

```sh
yarn tools:env:create
```

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
