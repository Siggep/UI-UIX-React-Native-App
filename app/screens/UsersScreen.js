import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import navigationTheme from "../navigation/navigationTheme";

const listings = [
  {
    id: 1,
    title: "ErikNilsson@hotmail.com",
    name: "Erik Nilsson",
    uploadDate: "2020-05-05",
  },
  {
    id: 2,
    title: "ErikNilsson@hotmail.com",
    name: "Erik Jonsson",
    uploadDate: "2020-02-05",
  },
  {
    id: 3,
    title: "ErikNilsson@hotmail.com",
    name: "Gunnar Nilsson",
    uploadDate: "2020-10-05",
  },
];

function UsersScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            name={item.name}
            uploadDate={item.uploadDate}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default UsersScreen;
