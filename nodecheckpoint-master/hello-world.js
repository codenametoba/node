console.log("HELLO WORLD!")

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World!</h1>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);

  fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File "welcome.txt" created successfully!');
  });

  
  fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data read from "hello.txt":');
    console.log(data);
  });
});
// Import the generate-password package
const generatePassword = require('generate-password');

// Generate a password
const password = generatePassword.generate({
  length: 12,
  numbers: true
});

// Output the password to the console
console.log(`Generated password: ${password}`);

