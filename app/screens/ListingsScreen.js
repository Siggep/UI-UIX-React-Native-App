import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import navigationTheme from "../navigation/navigationTheme";

const listings = [
  {
    id: 1,
    title: "Egenkontrollsenkät 1",
    name: "Erik Nilsson",
    uploadDate: "2020-05-05",
  },
  {
    id: 2,
    title: "Egenkontrollsenkät 2",
    name: "Johan Bengtsson",
    uploadDate: "2020-03-05",
  },
  {
    id: 3,
    title: "Egenkontrollsenkät 3",
    name: "Gunnar Gunnarson",
    uploadDate: "2020-09-05",
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Card
              title={item.title}
              name={item.name}
              uploadDate={item.uploadDate}
            />
          </TouchableOpacity>
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

export default ListingsScreen;
