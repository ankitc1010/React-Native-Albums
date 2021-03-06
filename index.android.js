// Lets start
//Importing a Library for rendering on the screen
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a component.
const App = () => (
  <View style={{ flex: 1 }}>
    <Header header="Albums" />
    <AlbumList />
  </View>
);
//Render it to the device
AppRegistry.registerComponent('First', () => App);
