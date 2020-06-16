import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { LabelTextInput } from '~/components';
import { Button } from 'react-native-elements';

const Home = ({
  params,
}) => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const _onPress = () => {

  }
  return (
    <View>
      <LabelTextInput placeholder="Name" onChangeText={setName}  />
      <LabelTextInput placeholder="Room" onChangeText={setRoom} />
      <Button title="Join" onPress={_onPress}/>
    </View>
  )
};

export default Home;
