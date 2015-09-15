# Boxrec-Pull
Allows for information about a boxer to be pulled from the online boxing database, Boxrec.

[![NPM version](https://badge.fury.io/js/boxrec-pull.svg)](http://badge.fury.io/js/boxrec-pull)


## Installation
```sh
npm install boxrec-pull --save
```

## Usage
```js
var boxrec = require('boxrec-pull');

boxrec.findById(356831, function(err, boxer) {
  console.log(boxer.name); // 'Gennady Golovkin'
});

boxrec.findByName('Carl Froch', function(err, boxer) {
  console.log(boxer.nickname); 'The Cobra'
});
```
## Notes
At present only the name, record, and nickname for a fighter are returned.

## Tests
```sh
npm test
```