# Time Convertor
```
npm i time-converter.js
```

# Usage
- .ms()
- .humanize()

## Examples
```javascript
const time = require('time-converter.js');

const humanizedTime = time.humanize(60000); //convert miliseconds into humanised time
console.log(humanizedTime); //return the value in string
```
```javascript
const time = require('time-converter.js');

const miliseconds = time.ms('1 minute'); //convert humanised time into miliseconds
console.log(miliseconds); //return the value in integer
```
