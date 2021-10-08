import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../../context/blog-context';

const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
}

const style = StyleSheet.create();

export default IndexScreen;