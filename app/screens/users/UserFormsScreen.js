import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Card from "../../components/Card";
import colors from "../../config/colors";
import Screen from "../../components/Screen";

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
    name: "Erik Nilsson",
    uploadDate: "2020-03-05",
  },
  {
    id: 3,
    title: "Egenkontrollsenkät 3",
    name: "Erik Nilsson",
    uploadDate: "2020-09-05",
  },
];

function UserFormsScreen(props) {
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

export default UserFormsScreen;
