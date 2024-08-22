import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PeopleScreen from '../screens/PeopleScreen';
import {NavigationContainer} from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const {token, setToken} = useContext(AuthContext);

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            tabBarStyle: {backgroundColor: '#101010'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={25}
                  color="white"
                />
              ) : (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={25}
                  color="#989898"
                />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarStyle: {backgroundColor: '#101010'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="person-add-outline" size={25} color="white" />
              ) : (
                <Ionicons name="person-add-outline" size={25} color="#989898" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="People"
          component={PeopleScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {token == null || token == '' ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
