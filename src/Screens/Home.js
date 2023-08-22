import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, Pressable } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {

  const [products, setproducts] = useState([]);

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setproducts(res.data);
      })

  }, [])

  const goToDetail = (item) => {
    navigation.navigate('Details', {item:item})
  }

  const renderItem = ({item}) => {
    return <Pressable onPress={() => goToDetail(item)}>
      <Text>{item.name}</Text>
    </Pressable>
  }

  return (<>
    <FlatList
      data={products}
      renderItem={renderItem}
    />
  </>
  );
};

export default HomeScreen;