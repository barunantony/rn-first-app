import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import  GoalItem from './components/GoalItem';
import  GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: courseGoals.length + '', goal}]);
  }

  const itemClick = (key) => {
    setCourseGoals((currentGoals) => {
      console.log('current goals: ', currentGoals)
      const index = currentGoals.findIndex(goal => goal.key === key);
      currentGoals[index].goal += '(✓)';
      return currentGoals;
    })
  }


  return (
    <View style={styles.container} >
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => 
          (<GoalItem 
              goal={itemData.item.goal} 
              itemClicked={itemClick.bind(this, itemData.item.key)}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 40
  }
});
