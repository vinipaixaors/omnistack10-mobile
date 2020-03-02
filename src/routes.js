import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main'
import Profile from './pages/Profile'
import HomeTest from './pages/HomeTest'

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7d40e7',
            height: 90
          },
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  
      >
        <Stack.Screen name="Main" 
          component={Main} 
          options={{
            title: 'DevRadar'
          }}
        />
        <Stack.Screen name="Profile" 
          component={Profile}
          options={{
            title: 'Profile'
          }}
        />
        <Stack.Screen name="HomeTest" 
          component={HomeTest}
          options={{
            title: 'HomeTest'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes