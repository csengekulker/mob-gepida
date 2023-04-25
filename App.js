import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [bikes, setBikes] = useState([])

  const fetchBikes = () => {
    fetch(`http://localhost:3000/bikes`)
    .then(res => res.json())
    .then(data => setBikes(data))
    .catch(err => console.error(err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bikes</Text>

      <Button 
      title="Load"
      onPress={fetchBikes}
    />

      <FlatList
        style={styles.list}
        data={bikes}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} | </Text>
            <Text>{item.wheel} | </Text>
            <Text>{item.usage} | </Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200
  },
  item: {
    flexDirection: 'row',
  },
  title: {
    marginTop: 24,
    fontSize: 34
  },
  list: {
    padding: 15
  }
});
