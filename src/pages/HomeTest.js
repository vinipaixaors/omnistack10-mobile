import * as React from 'react'
import { Button, View, Text } from 'react-native'

function HomeTest({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Screen</Text>
      <Button
        style={{ top: '2rem' }}
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default HomeTest