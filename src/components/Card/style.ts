import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    height: height - 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F6',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    marginBottom: 2
  },
  image: {
    flex: 1,
    borderRadius: 2,
    elevation: 2,
    marginBottom: 2,
    width: '100%'
  },
  imageDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 10,
    bottom: 10
  },
  text: {
    color: '#F4F4F6',
    textAlign: 'center',
    fontSize: 20,
    textShadowColor: '#000',
    textShadowRadius: 15
  }
});