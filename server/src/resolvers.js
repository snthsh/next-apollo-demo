const { paginateResults } = require('./utils');
const allPersons = require('./data/data.json');

module.exports = {
  Query: {
    persons: async (_, { pageSize = 20, after }) => {
      //const allPersons = getAllPersons(AllPersons.reverse());
      // we want these in reverse chronological order
      //allPersons.reverse();

      const persons = paginateResults({
        after,
        pageSize,
        results: allPersons,
      });

      return {
        persons,
        cursor: persons.length ? persons[persons.length - 1].cursor : null,
        // if the cursor of the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: persons.length
          ? persons[persons.length - 1].cursor !==
            allPersons[allPersons.length - 1].cursor
          : false,
      };
    },
  },
};
