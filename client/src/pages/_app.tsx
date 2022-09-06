//import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';

import { PageContainer } from '../components';
import { cache } from '../cache'
import injectStyles from '../styles'

//Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  //uri: 'http://localhost:4000/graphql',
  //uri: 'https://next-apollo-demo-heroku.herokuapp.com/graphql',
  uri: 'https://next-apollo-demo-five-backend.herokuapp.com',
  cache,
});

injectStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </ApolloProvider>
  );
}

export default MyApp;
