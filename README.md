# Welcome to anywhere-fitness-app-tt-20 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/node-14.16.0-blue.svg)
![Prerequisite](https://img.shields.io/badge/npm-6.14.11-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.

### 🏠 [Homepage](https://github.com/tt-webft-20AnywhereFitness/back-end)

### ✨ [Demo](https://anywhere-fitness-tt20.netlify.app/)

## Prerequisites

- node 14.16.0
- npm 6.14.11

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Bria Barry, Stone Cogswell, Domenic Scarcella, Kirk Snyder**

- Github: [briabytes, Stone98, DomenicScarcella, krsnyder]

Node Back-End - Build Week - Anywhere Fitness tt_wbft_20 -

[Endpoints] Base URL: https://anywhere-fitness-app-tt-20.herokuapp.com/api

This url will be the beginning of all endpoints. Add the following endpoints below to the base URL.
[Register]

No token is required when registering

Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/auth/register

    [POST] [Register] - Register a new user
        Endpoint: /auth/register

    Fields:
    "username" - string, unique (MUST not match any other registered username), REQUIRED
    "password" - string, REQUIRED
    "email": string, unique, REQUIRED
    "remaining_classes": integer, REQUIRED
    "role_id": integer, REQUIRED

[Login]

Token required for login

Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/auth/login

    [POST] [Login] - Login an already registered user to receive a token
        Endpoint: /auth/login

    Fields:
    "username" - string, MUST match a registered username, REQUIRED
    "password" - string, MUST match a registered password with registered username, REQUIRED

[Logout]

Token required for Logout

Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/auth/logout

    [POST] [Logout] - Logout a user destroy a token
        Endpoint: /auth/logout

    Fields:
    None required

[Users]

Token required for seeing classes

    [GET] [FindAllClasses] - Finds all classes
        Endpoint: /classes
        Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes

    [GET] [FindClassById] - Find a specific class by its assigned class ID
        Endpoint: /classes/:class_id
        Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes/1

    [GET] [FindClassesByUserId] - Find a user's classes by their assigned user ID
        Endpoint: /classes/user/:user_id
        Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes/user/1

    [POST] [AddClasses] - Create a new user class.
        Endpoint: /classes
        Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes

    [PUT] [AddClasses] - Update an existing user's class.
        Endpoint: /classes/:class_id
        Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes/1

    [DELETE] [RemoveClassById] - Remove a user's class by their assigned class ID
        Endpoint: /classes/:class_id
        Example: https://anywhere-fitness-app-tt-20.herokuapp.com/api/classes/1
