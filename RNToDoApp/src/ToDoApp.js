import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  AddToDo  from "./containers/AddToDo";
import VisibleTodos from "./containers/VisibleTodos";
export default class ToDoApp extends React.Component {

  state = {
      todos:[],
      visibilityFilter:'SHOW_ALL_TODOS'
  }  

  render() {
    return (
      <View style={styles.container}>
        <AddToDo />
        <View>
          <VisibleTodos></VisibleTodos>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
});