const request = require('request');
const fs = require('fs');

request(`http://www.example.edu/`, (error, response, body) => {
  if (error) {
    console.log(error)
  }

  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err);
    }
  });
  let len = body.length 
  console.log(`Downloaded and saved ${len} bytes to ./index.html`);
})
