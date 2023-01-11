import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from "prop-types";

const ListItem = (props) => {
  const item = props.singleMedia;
  return (
    <TouchableOpacity
      style={{backgroundColor: 'grey', marginTop: 10, height: 410}}
    >
      <Image
        style={{width: 180, height: 380, margin: 10}}
        source={{uri: item.thumbnails.w160}}
      />
      <View>
        <Text
          style={{
            fontStyle: 'bold',
            fontSize: 25,
            right: -200,
            top: -390,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            right: -200,
            top: -390,
            marginRight: 250,
            fontSize: 14,
          }}
        >
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};
export default ListItem;
