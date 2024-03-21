import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import { View } from "react-native";
import Feed from "../ui/feed";


export default function HomeScreen({ navigation }) {

  return (
    <ImageBackground source={require("../assets/Dark.png")} style={styles.container}>
        <Navbar navigation={navigation}/>
        <View style={{height: '77%', width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: 'transparent', top: 15}}>
          <Feed />
        </View>
        <Footer navigation={navigation}/>
    </ImageBackground>
  );

  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

});