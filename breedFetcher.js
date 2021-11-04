const request = require('request');
let query = process.argv.slice(2)[0];
request(`https://api.thecatapi.com/v/breeds/search?q=${query}`, function(error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
    return;
  }
  let res = JSON.parse(body);
  if (res.message) {
    console.log(res.message);
    return;
  }
  if (res.length === 0) {
    console.log(`Could not find the breed ${query}`);
    return;
  }
  console.log('statusCode:', response && response.statusCode);
  console.log(res[0]['description']);
});