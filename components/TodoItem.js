'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TodoItem extends React.Component {
  handleDeleteTodo(key) {
    console.log('makasih' + key)
    this.props.deleteTodo(key)
  }

  render() {
    return (
      <View style={{flexDirection: 'row', margin: 16}}>
        <Text style={{flex: 8}}>{this.props.todo}</Text>
        <TouchableOpacity
          style={{flex: 2}}
          onPress={this.handleDeleteTodo.bind(this, this.props.key)}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
