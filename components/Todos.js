'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import TodoItem from './TodoItem'

export default class Todos extends React.Component {
  render() {
    return (
      <View>
        <TodoItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
