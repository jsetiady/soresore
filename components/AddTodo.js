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
    this.setState({
      todo: ''
    })
  }

  render() {
    return (
      <View style={styles.addTodo}>
        <TextInput style={{flex: 200, backgroundColor: 'tomato'}}
          placeholder='isi aku dong mas'
          onChangeText={(textnya) => this.setState({todo: textnya})}
          value={this.state.todo}
        />
        <Button
          style={{flex: 1, backgroundColor: 'aqua'}}
          onPress={this.handleButtonPress.bind(this)}
          title='Add'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addTodo: {
    margin: 16,
    flexDirection: 'row', //flexbox
    marginTop: 24,
  }
});
