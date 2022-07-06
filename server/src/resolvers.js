const persons = require('./data/person');

module.exports = {
  Query: {
    persons: () => persons,
  },
};
