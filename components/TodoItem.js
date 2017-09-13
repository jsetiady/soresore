'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TodoItem extends React.Component {
  handleDeleteTodo() {
    console.log('delete pressed')
  }

  render() {
    return (
      <View>
        <Text>{this.props.todo}</Text>
        <TouchableOpacity onPress={this.handleDeleteTodo.bind(this)}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
