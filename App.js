import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

 
export default function App() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const tabNavigator = createBottomTabNavigator(
  {
    ReadStoryScreen: { screen: ReadStoryScreen },
    WriteStoryScreen: { screen: WriteStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName == 'ReadStory') {
          return (
            <Image
              source={require('./images/read.png')}
              style={{ width: 35, height: 35 }}
            />
          );
        } else if (routeName == 'Search') {
          return (
            <Image
              source={require('./assets/book.png')}
              style={{ width: 35, height: 35 }}
            />
          );
        }
      },
    }),
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
