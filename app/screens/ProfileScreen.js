import React from "react";
import { View, StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ProfileNav from "../ui/profileNav";
import ProfilePage from "../ui/userProfile";

export default function ProfileScreen({ navigation }) {
    return (
        <ImageBackground source={require("../assets/Dark.png")} style={styles.container}>
        <SafeAreaView style={styles.container}>
            <ProfileNav navigation={navigation}/>
            <ProfilePage navigation={navigation}/>
        </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
    },
});