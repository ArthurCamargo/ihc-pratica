/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
} from 'react-native';


const NumberToSum = () => {
  const [number1, newNumber1] = useState('')
  const [number2, newNumber2] = useState('')
  const [sum, newSum] = useState(0)
  return(
  <View style={{padding: 20}}>
  <TextInput
    style={{height: 50}}
    placeholder='Number 1'
    onChangeText={number1 => newNumber1(number1)}
    />
  <TextInput
    style={{height: 50}}
    placeholder='Number 2'
    onChangeText={number2 => newNumber2(number2)}
    />
  <Button
    onPress={() => {
      newSum(Number(number1) + Number(number2));
    }}
    title={sum.toString()}
  />
  </View>
  );
}

const Sum = (a ,b) => {
    return a + b
}


const App: () => Node = () => {
  return <NumberToSum/>
};

export default App;
