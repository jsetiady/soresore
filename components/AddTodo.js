'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    };
  }
  handleButtonPress() {
    this.props.addTodo(this.state.todo)
    this.setState({todo: ''})
  }

  render() {
    return (
      <View style={styles.addTodo}>
        <TextInput
          style={{flex: 8, backgroundColor: 'red'}}
          placeholder='Tulis Todo Kamu'
          onChangeText={todo => this.setState({todo: todo})}
          value={this.state.todo}
        />
        <Button
          style={{flex: 1, backgroundColor: 'blue'}}
          onPress={this.handleButtonPress.bind(this)}
          title='Add'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addTodo: {
    flexDirection: 'row' //flexbox
  }
});
