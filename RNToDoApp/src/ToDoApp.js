import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddToDo from "./containers/AddToDo";
import VisibleTodos from "./containers/VisibleTodos";
import BottomBar from "./components/BottomBar";
export default class ToDoApp extends React.Component {

  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL_TODOS'
  }

  render() {
    return (
      <View style={styles.container}>
        <AddToDo />
        <View>
          <VisibleTodos></VisibleTodos>
        </View>

        <View style={styles.buttonContainer}>
            <BottomBar/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  buttonContainer: {
    flex:1,
    justifyContent: 'flex-end',
  },
  buttonBarStyle: {

    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});