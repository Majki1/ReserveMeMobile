import React from "react";
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DMScreen({ navigation, route }) {
    const { messageId } = route.params;
    return (
        <ImageBackground source={require("../assets/Dark.png")} style={styles.container}>
        <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <Ionicons name="arrow-back" size={30} color="white" onPress={() => navigation.goBack()}/>
                <View style={styles.avatarPlaceholder} />
                <Text style={styles.title}>User with id {messageId}</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Type a message..." placeholderTextColor="white" />
            <Ionicons name="send" size={30} color="white" style={styles.inputIcon} />
            </View>
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
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'transparent',
        zIndex: 100,
        marginLeft: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        zIndex: 40,
        marginLeft: 10,
      },
      avatarPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#ccc',
        marginLeft: 20,
      },
    input: {
      flex: 1,
      fontSize: 20,
      color: 'white',
    },
    inputIcon: {
      marginLeft: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 30,
        marginHorizontal: 20,
        paddingHorizontal: 10,
      },
});