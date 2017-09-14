'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import TodoItem from './TodoItem'

export default class Todos extends React.Component {
  onDeleteTodo(key) {
    this.props.handleDelete(key)
  }

  render() {
    let todoItems
    if (this.props.todos) {
      todoItems = this.props.todos.map((todoItem, index) => {
        return (
          <TodoItem
            onDelete={this.onDeleteTodo.bind(this)}
            key={index}
            todo={todoItem}
          />
        )
      })
    }

    return (
      <View>
        {todoItems}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
