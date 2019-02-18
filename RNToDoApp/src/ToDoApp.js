import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  AddToDo  from "./containers/AddToDo";

export default class ToDoApp extends React.Component {

  state = {
      todos:[],
      visibilityFilter:'SHOW_ALL_TODOS'
  }  

  render() {
    return (
      <View style={styles.container}>
        <AddToDo />
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