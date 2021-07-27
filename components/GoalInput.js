import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
    const [goal, setGoal] = useState('Okay, Lets go!!! :-)');
    const goadInputHandler = (enteredText) => {
        setGoal(enteredText);
    }
    
    const buttonClick = (cb) => {
        cb(goal);
        setGoal('');
    } 

    return (
        <Modal visible={props.isAddMode} animationType="slide">
            <View style={styles.inputView}>
                <TextInput
                    placeholder="course goal"
                    style={styles.textInput}
                    onChangeText={goadInputHandler}
                    value={goal}
                />
                <Button 
                    title="Add" 
                    onPress={() => buttonClick(props.addGoalHandler)}
                    style={styles.button}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        flex: 0.9
    },
    button: {
    }
});

export default GoalInput;