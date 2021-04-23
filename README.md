# task-runner

TP Solution Mobile - React Native

## Groupe 12

- Julian ROMANA
- Kento MONTHUBERT

## Setup

### Clone and intialize the project

```bash
git clone git@github.com:kentoje/task-runner.git
cd task-runner
yarn
```

### Start expo

```bash
yarn start
```

### Activate mock mode

We encountered a lot of problems because of the API having unusual behaviors...
(answering with some beautiful 404 [when it should not...] and 520 HTTP codes)
So, we decided to create our own mock data, just so that we can easily test the app without
having the need to hit any external ressource.

To activate mocks:

```js
// ./config/global.js
global.mocks = true
```

