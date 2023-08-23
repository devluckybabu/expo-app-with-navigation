import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { BottomTab, Drawer, Tab } from './navigation';
import { StatusBar } from 'react-native';

const Home = () => <Text>Hello Worl!</Text>;


const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="Profile" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;