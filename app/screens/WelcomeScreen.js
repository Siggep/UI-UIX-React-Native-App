import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
import AppButton from "../components/Button";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Bitelogo.png")} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Admin" onPress={() => navigation.navigate('Login')}/>
        <AppButton title="Användare" onPress={() => navigation.navigate('UserLogin')}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 140,
    height: 140,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});

export default WelcomeScreen;
