import React, { Fragment, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, NormalizedCacheObject, ApolloProvider, gql, useQuery } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';

import PersonTile from './components/person-tile';
import {cache} from './cache';
//import Pages from './pages';
//import injectStyles from './styles';
//to be removed
import * as GetPersonListTypes from './__generated__/GetPersonList';


//Initialize ApolloClient
const client:ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/graphql;',
  cache
});
//injectStyles();

  export const PERSON_TILE_DATA = gql`
    fragment PersonTile on Person{
      __typename
      id
      name
    }
  `;
  
  export const GET_PERSONS = gql`
    query GetPersonList($after: String) {
      persons(after: $after) {
        cursor
        hasMore
        persons {
          ...PersonTile
        }
      }
    }
    ${PERSON_TILE_DATA}
  `;

interface PersonsProps extends RouteComponentProps{ }

const Persons = ({ }: PersonsProps) => {
  const { data, loading, error, fetchMore } = useQuery<
    GetPersonListTypes.GetPersonList,
    GetPersonListTypes.GetPersonListVariables
    >(GET_PERSONS);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading) return <div>loading...</div>;
  if (error || !data) return <p>Error!</p>;

  return (
    <Fragment>
      {data.persons &&
        data.persons.persons &&
        data.persons.persons.map((person: any) => (
          <PersonTile key={person.id} person={person} />
        ))}
      {data.persons &&
        data.persons.hasMore &&
        (isLoadingMore ?
          (<div>loading2...</div>) :
          (
          <button onClick={async () => { setIsLoadingMore(true); await fetchMore({ variables: { after: data.persons.cursor } }); setIsLoadingMore(false);  }}>Load More</button>
          )
        )
      }
    </Fragment>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root')!);
//Pass the ApolloClient instance to the ApolloProvider component
root.render(
  <ApolloProvider client={ client}>
    <Persons />
  </ApolloProvider>
);

export default Persons;