import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
        <View>
            <TextInput
                placeholder="course goal"
                style={styles.textInput}
                onChangeText={goadInputHandler}
                value={goal}
            />
            <Button 
                title="Add above goal to your list" 
                onPress={() => buttonClick(props.addGoalHandler)}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 2 
    },
    button: {
        position: 'absolute',
        bottom: 0
    }
});

export default GoalInput;