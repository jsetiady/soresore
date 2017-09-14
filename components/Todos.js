'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import TodoItem from './TodoItem'

export default class Todos extends React.Component {

  handleDelete(key) {
    this.props.onDelete(key)
  }

  render() {
    let todoItems
    if (this.props.todos) (
      todoItems = this.props.todos.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem}
            todo={todoItem}
            deleteTodo={this.handleDelete.bind(this)}
          />
        )
      })
    )

    return (
      <View>
        {todoItems}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
