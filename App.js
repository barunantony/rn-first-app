import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import  GoalItem from './components/GoalItem';
import  GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: courseGoals.length + '', goal}]);
    setIsAddMode(false);
  }

  const itemClick = (key) => {
    setCourseGoals((currentGoals) => {
      console.log('current goals: ', currentGoals)
      const index = currentGoals.findIndex(goal => goal.key === key);
      currentGoals[index].goal += '(✓)';
      return currentGoals;
    })
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  }


  const closeModalHandler = () => {
    setIsAddMode(false);
  }


  return (
    <View style={styles.container} >
      <Button 
        title="Add New Goal" 
        onPress={() => setIsAddMode(true)}
        style={styles.button}
      />
      <GoalInput addGoalHandler={addGoalHandler} isAddMode={isAddMode} closeModalHandler={closeModalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => 
          (<GoalItem 
              goal={itemData.item.goal} 
              itemClicked={itemClick.bind(this, itemData.item.key)}
              id={itemData.item.key}
              onDelete={removeGoalHandler}
          />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 40
  },
  button: {
    width: 40
  }
});
