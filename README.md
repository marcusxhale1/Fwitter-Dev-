# Fwitter

Welcome to Fwitter ReadMe.

##Setup
1. run `npm` to install the package dependencies
1. Make sure your MySQL is running `brew services start mysql` (If installed through Homebrew - otherwise use the GUI)
1. add a `.env` file at the root of the directory & paste the snippet below with the credentials to your MySQL db
```
DB_PW=
DB_USER=
DB_NAME=
1. run `node server.js` to start
1. open up a new browser and go to `localhost:3001`