import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

class AddToDo extends React.Component {

    state = {
        text:''
    }

    handleTextChagne = (text) => {
        console.log(text);
        this.setState({text:text})
        
    }

    addToDo = (text) => {
        //update redux store
        this.props.dispatch({type:'ADD_TODO',text})
        this.setState({
            text:''
        })

    }

  render() {
    return (
      <View style={styles.container}>
            <TextInput 
            value={this.state.text}
            onChangeText = {(text)=>{this.handleTextChagne(text)}}
            style = {styles.textInputStyle}
            placeholder="eg. Bring Milk">
            </TextInput>
            <TouchableOpacity onPress={()=>{this.addToDo(this.state.text)}}>
                <View style={styles.addButtonStyle}>
                    <Ionicons name='md-add' size={30} style={{padding:10,color:'red'}}></Ionicons>
                </View>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    margin:20
  },
  textInputStyle:{
      height:50,
      borderColor:'#f2f2e1',
      backgroundColor:'#eaeaea',
      padding:5,
      flex:1
  },
  addButtonStyle:{
      backgroundColor:'#eaeaea',
      height:50,
      justifyContent:'center',
      alignItems:'center',
      

  }

});

export default connect()(AddToDo)