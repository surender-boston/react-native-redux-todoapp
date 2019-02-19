import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


const ToDoList = ({todos,toggleTodo}) => {

    const list = todos.map((todo)=> {
      return (
        <TouchableOpacity key = {todo.id} onPress={ () => toggleTodo(todo.id) }>
        <Text style = {{fontSize:20,
          textDecorationLine:todo.completed?'line-through':'none'
       }}
        >{todo.text}</Text>
     </TouchableOpacity>
      )
   
    })
  
    return(
      <View style = {styles.container}>
        {list}
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    padding:20
  },
});

export default ToDoList