import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {

  render() {
    return (
            <View>
                <View><Header headerName='Albums'/></View>
                <View><AlbumList /></View>
            </View>
          );
      }
}

const styles = StyleSheet.create({
  container: {
      // flex: 1,
      justifyContent : 'center',
      alignItems : 'center',
      marginTop: 10,
      marginLeft : 150
  },
});
