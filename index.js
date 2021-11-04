const { fetchBreedDescription } = require('./breedFetcher');

let query = process.argv.slice(2)[0];

fetchBreedDescription(query, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});