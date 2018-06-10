import React from 'react';
import { StyleSheet,
   Platform,
   Text, 
   View, 
   TextInput,
   TouchableOpacity,
   ScrollView,
  } from 'react-native';
  import TodoList from './TodoList';

export default class App extends React.Component<{}> {
  state = {
    newTodo: '',
    todos: [],
  }
  
  onChangeText(newTodo){
    this.setState({ newTodo });
  }
  
  onPressAdd() {
    const { newTodo } = this.state;
    this.setState({
      newTodo: '',
      todos: [newTodo, ...this.state.todos],
    })
  }
  
  onPressDelete(index){
    this.setState({
      todos: this.state.todos.filter((t, i) => i !== index),
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
           value={this.state.newTodo}
           style={styles.form}
           onChangeText={text => this.onChangeText(text)}
        />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => this.onPressAdd()}
      >
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
        <TodoList 
          todos={this.state.todos}
          onPressDelete={(index) => this.onPressDelete(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  form: {
    backgroundColor: '#EEE',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#333',
    padding: 14,
    marginTop: 10,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: '#DDD',
  },
  todoContainer:{
    backgroundColor: '#FFF'
  }
});
