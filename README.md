# to-dollars
A JavaScript utility function for formatting numbers as dollars

### Installation

In a browser:
```html
<script src="index.js"></script>
```

Using [npm](https://www.npmjs.com/):

    $ npm install --save to-dollars

Or [yarn](https://yarnpkg.com/):

    $ yarn add to-dollars

In Node.js:
```js
var toDollars = require('to-dollars');
```

### Example
```js
toDollars(0)
//=> $0.00

toDollars(0.009)
//=> $0.01

toDollars(1000000000)
//=> $1,000,000,000.00

toDollars('hello world')
// => undefined

toDollars('1234')
// => $1,234.00
```
