const { paginateResults } = require('./utils');
const allPersons = require('./data/person');

module.exports = {
  Query: {
    //persons: () => persons,
    persons: async (_, { pageSize = 20, after }) => {
      //allPersons in reverse chronological order
      allPersons.reverse();

      const persons = paginateResults({
        after,
        pageSize,
        results: allPersons,
      });

      return {
        persons,
        cursor: persons.length ? persons[persons.length - 1].cursor : null,
        hasMore: persons.length
          ? persons[persons.length - 1].cursor !==
            allPersons[allPersons.length - 1].cursor
          : false,
      };
    },
  },
};
