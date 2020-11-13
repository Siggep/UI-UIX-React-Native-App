import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../../components/Card";
import colors from "../../config/colors";
import Screen from "../../components/Screen";

const listings = [
  {
    id: 1,
    title: "ErikNilsson@hotmail.com",
    name: "Erik Nilsson",
    uploadDate: "070 555 55 55",
  },
];

function UserInfoScreen(props) {
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

export default UserInfoScreen;
