import React from "react";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";

function LogoutButton() {
  const navigation = useNavigation();
  return (
    <Icon.Button
      name="ios-log-out"
      size={35}
      backgroundColor="white"
      color="black"
      onPress={() => navigation.navigate("Welcome")}
    ></Icon.Button>
  );
}

export default LogoutButton;
