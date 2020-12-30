import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('Okay, Lets go!!! :-)');
  const [courseGoals, setCourseGoals] = useState([]);

  const goadInputHandler = (enteredText) => {
    setGoal(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: courseGoals.length + '', goal}]);
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
        onPress={addGoalHandler}
      />
      {/* <ScrollView>
        {courseGoals.map((goal, i) => 
          <View key={i} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        )}
      </ScrollView> */}
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.goal}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 40
  },
  button: {
    position: 'absolute',
    bottom: 0
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
