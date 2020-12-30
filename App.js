import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('Okay, Lets go!!! :-)');
  const [courseGoals, setCourseGoals] = useState([]);

  const goadInputHandler = (enteredText) => {
    setGoal(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, goal]);
    setGoal('');
  }


  return (
    <View style={styles.container} >
      <TextInput
        placeholder="course goal"
        style={{ borderBottomColor: 'black', borderBottomWidth: 2 }}
        onChangeText={goadInputHandler}
        value={goal}
      />
      <Button 
        title="Add above goal to your list" 
        onPress={addGoalHandler} />
      {courseGoals.map((goal, i) => <Text key={i}>{goal}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 40
  },
  // button: {
  //   position: 'absolute',
  //   bottom: 0
  // }
});
