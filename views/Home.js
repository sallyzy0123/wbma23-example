import {Platform, StyleSheet, SafeAreaView, ImageBackground, View, Text} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground 
          source={require('../assets/winter.jpeg')}
          style={styles.bgImage}
          imageStyle={{borderBottomRightRadius:65}}
          >
        </ImageBackground>
        <Ionicons name="settings-outline" style={styles.icon}></Ionicons>
        <Text style={styles.winter}>Winter is leaving!</Text>
      </View>
        <List  navigation={navigation}/>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6def7',
      paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    header: {
      height:200,
      backgroundColor:'#e6def7',
    },
    bgImage: {
      width: '100%',
      height: '100%',
    },
    winter: {
      position: 'absolute',
      bottom: 40,
      left: 20,
      color:'#1b434d',
      backgroundColor:"rgba(230,222,247, 0.6)",
      fontWeight: 'bold',
      padding:10,
    },
    icon: {
      position:'absolute',
      top: 15,
      right: 20,
      fontSize: 40,
      color:"#e6def7",
    }
});

Home.propTypes = {
    navigation: PropTypes.object,
  };

export default Home;