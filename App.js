import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { FontAwesome } from '@expo/vector-icons';


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

    console.log(this.state.todos)
  }

  handleDeleteTodo(key) {
    let newTodos = this.state.todos
    // let index = this.state.todos.find(todoItem =>
    //   todoItem.key = key
    // )
    newTodos.splice(key, 1)
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <View>
        <AddTodo addTodo={this.handleAddTodo.bind(this)} />
        <Todos
          todos={this.state.todos}
          onDelete={this.handleDeleteTodo.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
