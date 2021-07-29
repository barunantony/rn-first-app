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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        padding: 20,
        marginBottom: 20
    },
    button: {
    }
});

export default GoalInput;