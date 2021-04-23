# task-runner

TP Solution Mobile - React Native

[Slides](https://docs.google.com/presentation/d/1mM6WyiaIVClR7YNIRWU73z70ru0nu-_EIXAuGdfjVHo/edit?usp=sharing)

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

