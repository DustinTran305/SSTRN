/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, FlatList, TextInput, Button } from 'react-native';
import styles from './home.style';
import { strings } from 'i18n';

const HomeView = props => {
console.log("🚀 ~ file: home.view.js ~ line 22 ~ props", props)
  const [username, setUserName] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');


  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="User Name"
        textAlign="center"
        defaultValue={username}
        onChangeText={username => setUserName(username)}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Password"
        textAlign="center"
        defaultValue={password}
        onChangeText={password => setPassword(password)}
      />
      <Button
        title="Log In"
        textAlign="center"
        onPress={() => props.onPressLogin({username, password})}
      />
      <Button
        title="GetList"
        textAlign="center"
      />
    </View>
  );
};

export default HomeView;
