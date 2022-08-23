import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './style';
import { ICard } from '../../type/';

export default function Card({ card }: ICard) {
  return (
    <View
      style={styles.card}
    >
      <Image
        source={{ uri: card.image }}
        style={styles.image}
      />

      <View style={styles.imageDescriptionContainer}>
        <Text
          style={styles.text}
        >
          {`${card.name}, ${card.gender}`}
        </Text>
      </View>
    </View>
  );
}