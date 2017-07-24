## Pizza store
## Introduction

This Single Page application aims to solve [this](https://gist.github.com/alwaysunday/fb09c6677a34a8c57590299d073da5f6) problem.
- Criterea
-- User should be able to add/remove pizzas of any size to their cart.
-- Use checkboxes to disable/enable toppings when adding a new pizza.
-- The pizza size determines the max number of toppings that can be toggled. Disable other topping checkboxes once they hit the max for a pizza. (A maxToppings of null means unlimited toppings!)
-- Cost per pizza should be calculated and displayed based on pizza base costs + sum of selected toppings.
-- Total cost should be calculated and displayed for all pizzas in the cart.

## Requirements

* [Node.js LTS](https://nodejs.org/en/download/) version ```v6.11.1``` or greater
* [Yarn latest](https://yarnpkg.com/en/docs/install) or  [Npm latest](https://www.npmjs.com/get-npm)

## Installation
#### Yarn
Go to the project root folder in your terminal and run
```
 yarn
```
#### Npm
Go to the project root folder in your terminal and run
```
npm install
```
## Running
To start the application in development mode, 
run the following commands
#### Development
#### Yarn
run
```
yarn start
```
and go to http://localhost:8000
##### Npm
run
```
npm start
```
and go to http://localhost:8000

## Production
To produce a build please run the following commands

#### Yarn 
```
yarn prod
```
A release folder will be created with production files that can be served by any webserver

#### Npm
```
npm run prod
```

A release folder will be created with production files that can be served by any webserver

### Custom config files 
#### host files

Under the config folder you'll find a `default.vars.json` file, which contains a dinamic loaded configuration for development and production builds. If you wish to have your own custom variables (default points to localhost) follow these instructions.

on your terminal run:
```
hostname
```
get the output of that command, example: `MyMachine.local` and create a file under the hosts folder with the output following this suffix: `.vars.json` That would look like this:
```
config/hosts/MyMachine.local.vars.json
```
Copy the contents of default.vars.json onto this new file and modify as you see fit. This new file will replace the default.vars.json.

## Remote development/debugging
If you wish to test your application on your local network or on your mobile or both, please follow these instructions.

on your default.vars.json file change the `publicPath` to your machine lan ip address, under dev. Example: 
```
{
   "dev":{
       "publicPath": "http://192.168.0.1:8000"
    }
}
```
- please note, if you're using a custom config file as explained above, perform those the changes on that file.

then go to the `package.json` file, and modify line 10 `--host` argument to also match your ip address.
it will look like this:
```
"remote": "webpack-dev-server --port 8000 --content-base static --hot --inline --host 192.168.0.1"
```

Then simply run on your terminal
```
yarn remote
```
or 
```
npm run remote
```

Thanks.

Lucas Rovaris