import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppTodo from './components/AppTodo'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
