import * as React from 'react';
import {useState} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
function TextScreen({navigation}) {
  const [text, setText] = useState('')
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
        <TextInput
          placeholder="Type anything"
          onChangeText={text => setText(text)}
        />
      <Button
        title="Hey"
        onPress={() => navigation.navigate('Second', {text: text})}
      />
  </View>
  );
}

function SecondScreen({route}){
    return(
    <View style={{ flex: 1, alignItems: 'center'}}>
        <Text>{route.params.text}</Text>
    </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Text">
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
