# Time Convertor
```
npm i time-converter.js
```

# Usage
- .parseTime()
- .parseMs()

## Examples
```javascript
const timeConverter = require('time-converter.js');

const time = timeConverter.parseTime(60000) //convert miliseconds into humanised time
console.log(time); //return the value in string
```
```javascript
const timeConverter = require('time-converter.js');

const time = timeConverter.parseMs('1 minute') //convert humanised time into miliseconds
console.log(time); //return the value in integer
```
