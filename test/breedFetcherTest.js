const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  //Test for invalid/non-exist breed
  it('should return error message that breed not found', (done) => {
    fetchBreedDescription('fchgdfjd', (err, desc) => {
      assert.equal(desc,null);
      let expected = `Could not find the breed fchgdfjd`;
      assert.equal(expected,err);
      done();
    });
  });
});