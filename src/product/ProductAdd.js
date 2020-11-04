import React, {useState} from 'react';
import { Button , TextInput, View,Modal } from 'react-native';
import styles from '../styles';


export default function ProductAdd(props) {
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  function update(){
    props.update({desc,category,price});
    props.setIsVisible(false);
  }

  return (
    <Modal visible={props.modalVisible}>
    <TextInput style={styles.down} placeholder="產品說明" value={desc} onChangeText={text=>setDesc(text)}/>
    <TextInput style={styles.down} placeholder="產品類別" value={category} onChangeText={text=>setCategory(text)}/>
    <TextInput style={styles.down} placeholder="價格" value={price} onChangeText={text=>setPrice(text)}/>
    <Button onPress={update} title="新增"/>
    </Modal>
  );
}