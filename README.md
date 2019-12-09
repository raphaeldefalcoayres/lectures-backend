# lectures-backend
Node js API using express js to manage lectures

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/raphaeldefalcoayres/lectures-backend/blob/master/LICENSE)

<p align="center">
  <a href="#introduction">Introduction</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installing">Installing&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp</a>
  <a href="#test-example">Test Example&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp</a>
  <a href="#built-with">Built With&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp</a>
  <a href="#license">Licença</a>
</p>


## Introduction

This API manages the lectures that took place in just one conference day will take place in two sessions, the first from 9 am to 12 pm and the second from 1 pm to 5 pm where happy hour will start.

## Overview

This API was developed in nodejs using the expressjs framework, configured with Sequelize to use SQL databases, was initially used postgres database but it is possible to use any other installing and configuring, Sucrase for use of import and export, Eslint for code linting, prettier for automatic code standardization, EditorConfig for standardization across various editors and IDEs, Nodemon for automatic reload during development, Jest with Sqlite database for tests and other libraries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See below for instructions on how to operate in your local environment.

### Prerequisites

What things you need to install the software

```
stable current version of node, npm and yarn
```

### Installing

A step by step that tell you how to get a development env running

First

```
Clone the project
```

Second

```
Execute `yarn` or `npm install` for installing dependences
```

Third

```
Duplicate `.env.example` to create `.env` with your basic configs
```

Finishing

```
Execute `yarn dev` or `npm run dev` for executing api
```
```
Execute `yarn test` or `npm run test` for testing api
```

## Test Example

Input:

```
{
 "data":[
	"Writing Fast Tests Against Enterprise Rails 60min",
	"Overdoing it in Python 45min",
	"Lua for the Masses 30min",
	"Ruby Errors from Mismatched Gem Versions 45min",
	"Ruby on Rails: Why We Should Move On 60min",
	"Common Ruby Errors 45min",
	"Pair Programming vs Noise 45min",
	"Programming in the Boondocks of Seattle 30min",
	"Ruby vs. Clojure for Back-End Development 30min",
	"User Interface CSS in Rails Apps 30min",
	"Communicating Over Distance 60min",
	"Rails Magic 60min",
	"Woah 30min",
	"Sit Down and Write 30min",
	"Accounting-Driven Development 45min",
	"Clojure Ate Scala (on my project) 45min",
	"A World Without HackerNews 30min",
	"Ruby on Rails Legacy App Maintenance 60min",
	"Rails for Python Developers lightning"
 ]
}
```
Output:

```
{
  "data": [
    {
      "title": "Track 1",
      "data": [
        "09:00AM Writing Fast Tests Against Enterprise Rails 60min",
        "10:00AM Overdoing it in Python 45min",
        "10:45AM Lua for the Masses 30min",
        "11:15AM Ruby Errors from Mismatched Gem Versions 45min",
        "12:00PM Lunch",
        "01:00PM Ruby on Rails: Why We Should Move On 60min",
        "02:00PM Common Ruby Errors 45min",
        "02:45PM Pair Programming vs Noise 45min",
        "03:30PM Programming in the Boondocks of Seattle 30min",
        "04:00PM Ruby vs. Clojure for Back-End Development 30min",
        "04:30PM User Interface CSS in Rails Apps 30min",
        "05:00PM Networking Event"
      ]
    },
    {
      "title": "Track 2",
      "data": [
          "09:00AM Communicating Over Distance 60min",
          "10:00AM Rails Magic 60min",
          "11:00AM Woah 30min",
          "11:30AM Sit Down and Write 30min",
          "12:00PM Lunch",
          "01:00PM Accounting-Driven Development 45min",
          "01:45PM Clojure Ate Scala (on my project) 45min",
          "02:30PM A World Without HackerNews 30min",
          "03:00PM Ruby on Rails Legacy App Maintenance 60min",
          "04:00PM Rails for Python Developers lightning",
          "05:00PM Networking Event"
      ]
    }
  ]
}
```
## Built With

* [Expressjs](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Sucrase](https://sucrase.io/) - Sucrase is an alternative to Babel that allows super-fast development builds.
* [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code.
* [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
* [Nodemon](https://nodemon.io/) -  Nodemon for reload automatically.
* [EditorConfig](https://editorconfig.org/) - EditorConfig helps maintain consistent coding styles for multiple developers and editors.
* [Sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM.
* [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [Supertest](http://visionmedia.github.io/superagent/) - Super-agent driven library for testing node.js HTTP servers using a fluent API.
* [Factory Girl](https://github.com/simonexmachina/factory-girl#readme) - A factory library for node.js and the browser inspired by factory_girl.
* [Faker](https://github.com/marak/Faker.js/) - Generate massive amounts of realistic fake data in Node.js and the browser.
* [Yup](https://github.com/jquense/yup) - Yup is a JavaScript object schema validator and object parser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
