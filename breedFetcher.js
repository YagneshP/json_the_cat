const request = require('request');
const fetchBreedDescription = function(query, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    let res = JSON.parse(body);
    if (res.message) {
      callback(res.message, null);
      return;
    }
    if (res.length === 0) {
      callback(`Could not find the breed ${query}`,null);
      return;
    }
    callback(null,res[0]['description']);
  });
};
module.exports = { fetchBreedDescription };