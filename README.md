<img align="right" alt="traffic" src="https://pv-badge.herokuapp.com/total.svg?repo_id=olavoparno-should-i-deploy-today"/>

# Should I deploy today CI/CD

> Should I deploy today? Use it in your CI/CD environment or simply for fun.

| Statements                                                                    | Branches                                                                                       | Functions                                                                          | Lines                                                               |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Branches%20are%20troublesome!-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Mis%20funciones!-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg) |

---

## Table of Contents

- [Running example](#running-example)
- [Requirements](#requirements)
- [Installation](#installation)
- [Simple Usage](#simple-usage)
- [Advanced Usage](#advanced-usage)
- [Contributors](#contributors)
- [License](#license)

## Running example

**TODO**

---

## Installation

- Install the library in your project as a devDependency:

```bash
  npm i -D should-i-deploy-today
```

---

## Simple Usage

- Simply run it from the CLI as follows to see whether you should or should not deploy today:

```bash
  npm run should-i-deploy-today
```

---

## Advanced Usage

- Want it to throw an error on your CI/CD environment? Use **--ci** argument:

```bash
  npm run should-i-deploy-today --ci
```

- Want it without logging? Try silent mode with **--silent** argument:

```bash
  npm run should-i-deploy-today --silent
```

- You may also only throw on a pipeline without loggin anything by combining both arguments:

```bash
  npm run should-i-deploy-today --silent --ci
```

---

## License

should-i-deploy-today is [MIT licensed](./LICENSE).
