const config = require('config');
const printme = config.get('jwtSecret')
console.log(printme)