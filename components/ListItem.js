import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const ListItem = ({singleMedia, navigation}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity 
      style={styles.row} 
      onPress={() => {
        navigation.navigate('Single', item);
    }}>
      <View style={styles.photoBox}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + item.thumbnails?.w160}}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#1b434d',
    marginTop: 10,
    marginHorizontal: 15,
    borderBottomRightRadius: 40,
	  borderTopRightRadius: 40,
    borderBottomLeftRadius:65,
	  overflow: 'hidden',
  },
  photoBox: {
    flex: 1,
  },
  textBox: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    minHeight: 100,
    borderBottomLeftRadius:65,
    overflow: 'hidden',
  },
  listTitle: {
    fontWeight: 'bold',
    color:'#faf3eb',
    fontSize: 20,
    paddingBottom: 15,
    fontFamily:'Cochin',
  },
  listDescription: {
    fontSize: 15,
    color:'#faf3eb',
  }
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;