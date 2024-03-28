const ParenthesisValidator = require('./ParenthesisValidator');

let pv = new ParenthesisValidator();
console.log(pv.isParenthesisValid('(((())))'));
console.log(pv.isParenthesisValid('(())))'));
console.log(pv.isParenthesisValid('(((())'));