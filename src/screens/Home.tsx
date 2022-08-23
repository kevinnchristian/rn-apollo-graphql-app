import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

import INFO_PERSON from '../queries';
import { useQuery } from '@apollo/client';

import Card from '../components/Card';


export default function Home() {
  const { loading, error, data } = useQuery(INFO_PERSON);

  return (
    <SafeAreaView>
      <View>
        {loading && <Text>Loading ...</Text>}
        {error && <Text>Error ...</Text>}
        {data &&
          < FlatList
            data={data.characters.results}
            renderItem={({ item }) => <Card card={item} />}
            keyExtractor={item => item.id}
          />
        }
      </View>
    </SafeAreaView>
  );
}