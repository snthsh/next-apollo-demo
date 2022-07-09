import { InMemoryCache, Reference } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        persons: {
          keyArgs: false,
          merge(existing, incoming) {
            let persons: Reference[] = [];
            if (existing && existing.persons) {
              persons = persons.concat(existing.persons);
            }
            if (incoming && incoming.persons) {
              persons = persons.concat(incoming.persons);
            }
            return {
              ...incoming,
              persons,
            };
          },
        },
      },
    },
  },
});
