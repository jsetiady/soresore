'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {MaterialIcons, FontAwesome} from '@expo/vector-icons'

export default class TodoItem extends React.Component {
  handleDeleteButton(key) {
      this.props.onDelete(key)
  }

  render() {
    return (
      <View style={styles.todoItem}>
        <Text style={styles.textnya}>{this.props.todo}</Text>
        <TouchableOpacity
          style={styles.deletenya}
          onPress={this.handleDeleteButton.bind(this, this.props.key)}
        >
          <MaterialIcons name='delete' size={20} color='purple' />
          <FontAwesome name='fa-info' />
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
