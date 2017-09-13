'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TodoItem extends React.Component {
  handleDeleteButton() {
      console.log('delete pressed')
  }

  render() {
    return (
      <View style={styles.todoItem}>
        <Text style={styles.textnya}>Ini todo</Text>
        <TouchableOpacity style={styles.deletenya} onPress={this.handleDeleteButton.bind(this)}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    margin: 8
  },
  textnya: {
    flex: 8
  },
  deletenya: {
    flex: 1
  }
});
