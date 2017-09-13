import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  handleAddTodo(todo) {
    let newTodos = this.state.todos
    newTodos.push(todo)
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <View>
        <AddTodo addTodo={this.handleAddTodo.bind(this)} />
        <Todos todos={this.state.todos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
