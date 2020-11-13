import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import UserInfoScreen from "../screens/users/UserInfoScreen";
import UserFormsScreen from "../screens/users/UserFormsScreen";

import IconButton from "../components/Icon.Button";
import LogoutButton from "../components/LogoutButton";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="MyAccount"
      component={UserInfoScreen}
      options={{
        title: "Mitt Konto",
        headerTitleAlign: "center",
        headerLeft: () => <IconButton />,
        headerRight: () => <LogoutButton />,
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = () => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Mina Kontroll Rapporter"
      component={UserFormsScreen}
      options={{
        headerTitleAlign: "center",
        headerLeft: () => <IconButton />,
        headerRight: () => <LogoutButton />,
      }}
    />
  </DetailsStack.Navigator>
);

export default function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Reports">
      <Drawer.Screen
        name="Mina Kontroll rapporter"
        component={DetailsStackScreen}
      />
      <Drawer.Screen name="Mitt Konto" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}
