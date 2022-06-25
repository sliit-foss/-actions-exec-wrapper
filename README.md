# actions-exec-wrapper

A wrapper around the @actions/exec module which promisifies the console output of a command

---

## Installation

```js
# using npm
npm install actions-exec-wrapper

# using yarn
yarn add actions-exec-wrapper
```
## Usage

```js
# using require
const exec = require("actions-exec-wrapper");

# using import
import exec from "actions-exec-wrapper";
```

## Example<br/>

```js
exec('npm --version').then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
})
```
