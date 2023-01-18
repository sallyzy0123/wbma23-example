import {useEffect, useState} from 'react';
import {MaskedViewBase} from 'react-native';
import {baseUrl} from '../utils/variables';

const doFetch = async(url, options) => {
  const response = await fetch(url, options);
  const json = await response.json();
  if(!response.ok) {
    const message = json.error ? `${json.message}: ${json.error}`: json.message;
    throw new Error(message || response.statusText);
  }
  return json;
};

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(baseUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (file) => {
          const fileResponse = await fetch(baseUrl + 'media/' + file.file_id);
          return await fileResponse.json();
        })
      );

      setMediaArray(media);
    } catch (error) {
      console.error('List, loadMedia', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return {mediaArray};
};

const useAuthentication = () => {
  const postLogin = async (userCredentials) => { 
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    };
    try {
       const loginResult = await doFetch(baseUrl + 'login', options);
       return loginResult;
    } catch (error) {
       console.error('postLogin', error);
       throw new Error('postLogin: ' + error.message);
    }
 };
  return {postLogin};
};

// https://media.mw.metropolia.fi/wbma/docs/#api-User
const useUser = () => {
  const getUserByToken = async (token) => {
      const options = {
        method: 'GET',
        headers: {'x-access-token': token},
      };
      try {
        return await doFetch(baseUrl + 'users/user', options)
      } catch (error) {
        throw new Error('checkUser: ' + error.message);
      }
  };
 
  return {getUserByToken};
};

export {useMedia, useAuthentication, useUser};