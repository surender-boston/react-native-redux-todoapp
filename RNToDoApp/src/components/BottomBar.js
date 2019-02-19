import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from "react-redux";
import { showAllTodos,showCompleteTodos } from '../actions';


class BottomBar extends React.Component {

    allButtonClicked = () => {
        console.log('AllButton clicked')

        // let array = [{completed:true,name:'suri'},{completed:false,name:'suri'},{completed:true,name:'suri'}]

        // let newArray = array.filter((item)=>{
        //      return item.completed === true
        // })

        // console.log(newArray);
        

        this.props.dispatch(showAllTodos())
    }
    completeButtonClicked = () => {
        console.log('Complete clicked')
        this.props.dispatch(showCompleteTodos())
    }
    incompleteButtonClicked = () => {
        console.log('InComplete clicked')
    }
    render() {
        return (
            <View style={styles.buttonBarStyle}>
                <Button title='All' onPress={() => this.allButtonClicked()} />
                <Button title='Complete' onPress={() => this.completeButtonClicked()} />
                <Button title='Incomplete' onPress={() => this.incompleteButtonClicked()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    buttonBarStyle: {

        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default connect()(BottomBar)