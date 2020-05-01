import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutScreen from '../../screens/AboutScreen/AboutScreen';
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'SEARCH',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="ios-information-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
