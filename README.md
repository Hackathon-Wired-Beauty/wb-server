# Wired Beauty - Server

## ⚠️ Before starting the project

You need to run locally a database an import the [existing database](https://github.com/Hackathon-Wired-Beauty/wb-server/blob/master/wired_beauty.sql) into your database manager. Then you need to import the `.env` provided in the hackathon dev folder and edit the database section if needed.
The default user in order to connect to the backoffice is:
```
Email: admin@admin.com
Password: admin
```

Then you can run `npm run start:dev`.

## Available commands

Start the project locally using nodemon (*nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected*).
```bash
npm run start:dev
```

Build the project for production (It'll create a folder called `/build` in the root directory).
```bash
npm run build
```

Build and start the project
```bash
npm start
```
