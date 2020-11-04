import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Click from './src/Click';
import ProductList from './src/product/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  // const [count, setCount] = useState(10);
  // let countString = "count in App:"+count;
  // function updateCount(newCount){

  //   setCount(newCount);

  // }
  // useEffect(()=>{

  //   Alert.alert("count:"+count);});
  return (
    <View style={styles.container}>
      {/* <Text>Hi</Text>
      <Click count={10} update={updateCount}/>
      <StatusBar style="auto" /> */}
      <ProductList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
