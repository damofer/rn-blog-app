import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { MainStackNavigator } from "./navigation/StackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Package
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

// Screens
import MainScreen from './screens/MainScreen'
import DetailScreen from './screens/DetailScreen'

const Stack = createSharedElementStackNavigator();

const App = ({navigation}) => {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
  );
  /* return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="List" 
       screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={() => {
            return {
              gestureEnabled: false,
              transitionSpec: {
                open: {
                  animation: 'timing',
                  config: { duration: 500, delay: 1 },
                },
                close: { animation: 'timing', config: { duration: 200 } },
              },
              cardStyleInterpolator: ({ current: { progress } }) => {
                return {
                  cardStyle: {
                    opacity: progress,
                  },
                };
              },
            };
          }}
          sharedElementsConfig={(route) => {
            const { data } = route.params;
            return [
              {
                id: `item.${data.id}.photo`,
                animation: 'move',
                resize: 'clip',
                align: 'center-top'
              },
              {
                id: `item.${data.id}.text`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },

              {
                id: `item.${data.id}.profilePic`,
                animation: 'move',
                resize: 'clip',
                align: 'left-center'
              },
              {
                id: `item.${data.id}.username`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },
              {
                id: `item.${data.id}.readtime`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center'
              },
      
          ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); */
};

export default App