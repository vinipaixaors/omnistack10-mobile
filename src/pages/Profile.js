import React from 'react';
import { WebView } from 'react-native-webview';

function Profile({ route }) {
  const githubUsername = route.params.github_username
  
  return (
    <WebView 
      source={{ uri: `https://github.com/${githubUsername}` }}
      style={{ flex: 1 }}
    />
  )
}

export default Profile