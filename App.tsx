import {
  Text,
  View
} from 'react-native';

import { ApolloProvider } from '@apollo/client';
import client from './src/services';

import Home from './src/screens/Home';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}