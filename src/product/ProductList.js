import React, {useState} from 'react';
import {FlatList, View, Text, StatusBar,StyleSheet,TouchableOpacity} from 'react-native';
import ProductAdd from './ProductAdd';
import styles from '../styles';
import {Icon, Fab, Button} from 'native-base';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

import {config} from './firebase_config';

// const data =[
//   {desc:"iPhone 7", price:12000, category:"手機"},
//   {desc:"iPhone 8", price:10000, category:"手機"},
//   {desc:"iphone 11", price:32800, category:"手機"},
// ]
/*
const Item = ({name}) => (
  <View>
    <Text>{name}</Text>
  </View>
);
*/

export default function ProductList() {
  

  const [selected, setSelected] = useState(null);
  const [products, setProducts] = useState([
    {desc:"iPad", category:"手機", price:20000},
    {desc:"iPhone X", category:"手機", price:30000},
    ]);

  const[isvisible,setIsVisible]=useState(false)
  
  const renderItem = ({ item, index }) => {
    const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";
    return(  
    <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>
      <Text style={styles.index}>{index+1}.</Text>
      <Text style={styles.title}>{item.desc}</Text>
      <Text style={styles.content}>{item.category}</Text>
      <Text style={styles.content}>{item.price}</Text>
      <Button onPress={delete1} title="刪除"/>
      
    </TouchableOpacity>
    )
  };

  function update(newProduct){
    setProducts(oldProducts=>[...oldProducts, newProduct]);
  }

  function delete1(){
    props.delete({desc,category,price});
    props.setIsVisible(false);
  }

  return (
    <View style={styles.container}>
    <ProductAdd update={update} modalVisible={isvisible} setIsVisible={setIsVisible}/>
    <FlatList 
     data={products} 
     renderItem = {renderItem}
     keyExtractor={item => item.desc}
     >
    
    </FlatList>
    <Fab onPress={()=>setIsVisible(true)}>
     <Icon ios='ios-add' android="md-add"/>
   </Fab>
   
    </View>
  );
 }

// const styles = StyleSheet.create({
//   container: {
//     //backgroundColor: '#00bfff',
//     flex: 1,
//     flexDirection: 'row',
//     marginTop: "75%",
//     // StatusBar.currentHeight || 250
//   },
//   item: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#FFBB77',
//     padding: 8,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 24,
//   },

// });

