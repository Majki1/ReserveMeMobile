import React from "react";
import { StyleSheet, ImageBackground, SafeAreaView, View, Text } from "react-native";

export default function InboxScreen({ navigation }) {
    return (
        <ImageBackground source={require("../assets/mainback.png")} style={styles.container}>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <Text style={styles.title}>Inbox</Text>
            </View>
        </SafeAreaView>
        </ImageBackground>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        color: "white",
        zIndex: 40,
        position: "absolute",
        top: 100,
    },
});


