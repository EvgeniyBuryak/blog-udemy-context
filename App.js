import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen/index-screen.view";
import { BlogProvider } from './src/context/blog-context';

const navigator = createStackNavigator (
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'List Blogs'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return ( 
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};