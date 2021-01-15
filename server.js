const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000
const connectDB = require("./config/db.js");

//Database Connection
connectDB();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

app.get('/', (req, res) => {
res.send('Hello Mobillor - Simple Validator API!')
})
app.get('/isValid/', function (req, res) {
function isValid(str) {

if (str.length <= 1)
return false

let matchingOpeningBracket, ch
let stack = []
let openingBrackets = ['[', '{', '(']
let closingBrackets = [']', '}', ')']

for (let i = 0; i < str.length; i++) {
ch = str[i]

if (closingBrackets.indexOf(ch) > -1) {
matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]

if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
return false
}
} else {
stack.push(ch)
}
}
return (stack.length == 0)
};
const response = isValid("{")
res.send(response);
})

app.listen(port, () => {
console.log(`Validator App listening at http://localhost:${port}`)
})