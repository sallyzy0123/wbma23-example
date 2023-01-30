import {Card, Input, Button} from '@rneui/themed';
import PropTypes from 'prop-types';
import {Controller, useForm} from 'react-hook-form';
import {TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

const Upload = ({navigation}) => {
    const [image, setImage] = useState({});
    const {
        control, 
        handleSubmit, 
        formState: {errors}, 
    } = useForm({
        defaultValues: {title: '', description: ''},
    });

    const upload = async(data) => {
        console.log('uploading a file', data);
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0]);
        }
    };

    return (
        <ScrollView>
        <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={1}>
        <Card>
            <Card.Image source={{uri: image.uri || 'https://placekitten.com/g/200/300'}}/>
            <Controller 
              control={control}
              rules={{required: {value: true, message: 'is required'}}}
              render={({field: {onChange, onBlur, value}}) => (
              <Input 
                placeholder="Title"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.title && errors.title.message}
              />
          )}
          name="title"
        />
            <Controller 
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
              <Input 
                placeholder="Description"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
          )}
          name="description"
        />
        <Button title="Pick an image" onPress={pickImage} />
        <Button 
          title="Upload!" 
          onPress={handleSubmit(upload)}
          />
        </Card>
        </TouchableOpacity>
        </ScrollView>
    );
};


Upload.propTypes = {
    navigation: PropTypes.object,
  };

export default Upload;