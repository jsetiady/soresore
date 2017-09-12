'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

export default class AppTodo extends Component {
  render() {
    return (
      <View style={styles.appTodo}>
        <TextInput style={{flex:8}} placeholder='Isi dong' />
        <Button style={{flex:1}} onPress={console.log('button pressed')} title='Pencet aku' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTodo: {
    flexDirection: 'row',
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16
  }
});
