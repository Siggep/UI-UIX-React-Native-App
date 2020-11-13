import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import UsersScreen from "../screens/UsersScreen";
import ListingsScreen from "../screens/ListingsScreen";
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
      name="Users"
      component={UsersScreen}
      options={{
        title: "Användare",
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
      name="KontrollRapporter"
      component={ListingsScreen}
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
      <Drawer.Screen name="Kontroll rapporter" component={DetailsStackScreen} />
      <Drawer.Screen name="Användare" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}
