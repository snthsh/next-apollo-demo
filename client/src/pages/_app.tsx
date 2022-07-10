//import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import {cache}from '../cache'

//Initialize ApolloClient
const client:ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
