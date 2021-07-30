import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';

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
                <TouchableOpacity
                    onPress={() => buttonClick(props.closeModalHandler)}
                    style={styles.cancelButton}
                >
                   X
                </TouchableOpacity>
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
    },
    cancelButton: {
        color: 'grey',
        position: 'absolute',
        top: 10,
        right: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: 20,
        height: 20,
        fontSize: 15,
        alignItems: 'center'
    }
});

export default GoalInput;