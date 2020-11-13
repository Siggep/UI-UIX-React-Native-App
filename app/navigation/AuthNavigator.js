import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import UserLoginScreen from "../screens/users/UserLoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import StackScreen from "../navigation/StackNavigation";
import UserStackScreen from "../navigation/UserStackNavigation";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="UserLogin"
      component={UserLoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Stack"
      component={StackScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="UserStack"
      component={UserStackScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
