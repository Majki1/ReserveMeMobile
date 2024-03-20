import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";


export default function HomeScreen({ navigation }) {

  return (
    <ImageBackground source={require("../assets/mainback.png")} style={styles.container}>
        <Navbar navigation={navigation}/>
        <Footer navigation={navigation}/>
    </ImageBackground>
  );

  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },

});