const casual = require('casual');
const { TOTAL_PERSONS } = require('../constants');

//define custom generator
casual.define('person', () => ({
  id: () => casual.uuid,
  name: () => casual.name,
  address: () => casual.address,
  email: () => casual.email,
  phoneNumber: () => casual.phone,
}));

//create persons array of length TOTAL_PERSONS
const persons = [...new Array(TOTAL_PERSONS).fill(casual.person)];

module.exports = persons;
