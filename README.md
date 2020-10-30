# Time Convertor
```
npm i time-convertor
```

# Usage
- .parseTime()
- .parseMs()

## Examples
```javascript
const timeConvertor = require('time-convertor');

const time = timeConvertor.parseTime(60000) //convert miliseconds into humanised time
console.log(time); //return the value in string
```
```javascript
const timeConvertor = require('time-convertor');

const time = timeConvertor.parseMs('1 minute') //convert humanised time into miliseconds
console.log(time); //return the value in integer
```