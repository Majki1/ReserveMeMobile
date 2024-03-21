import React from "react";
import { StyleSheet, ImageBackground, SafeAreaView, View, Text, Platform, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function InboxScreen({ navigation }) {

    const messsageData = [
        {id: 1, title: "Message 1", description: "This is a message"},
        {id: 2, title: "Message 2", description: "This is a message"},
        {id: 3, title: "Message 3", description: "This is a message"},
        {id: 4, title: "Message 4", description: "This is a message"},
        {id: 5, title: "Message 5", description: "This is a message"},
        {id: 6, title: "Message 6", description: "This is a message"},
        {id: 7, title: "Message 7", description: "This is a message"},
        {id: 8, title: "Message 8", description: "This is a message"},
        {id: 9, title: "Message 9", description: "This is a message"},
        {id: 10, title: "Message 10", description: "This is a message"},
    ];

    return (
        <ImageBackground source={require("../assets/Dark.png")} style={styles.container}>
        <SafeAreaView style={styles.container}> 
        <View style={styles.navbar}>
            <Ionicons name="arrow-back" size={30} color="white" onPress={() => navigation.goBack()}/>
            <Text style={styles.title}>Inbox</Text>
        </View>
        <View style={styles.palceholder}>
        <FlatList
            data={messsageData}
            style={{ width: '100%' }}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('DM', { messageId: item.id })}>
                <View style={{ flexDirection: 'row', padding: 20, borderBottomColor: 'gray', borderBottomWidth: 0.5, width: '100%' }}>
                <View style={styles.avatarPlaceholder} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: 'white' }}>From: John Doe</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.title}</Text>
                    <Text style={{ color: 'white' }}>{item.description}</Text>
                </View>
                </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
        />

        </View>
        </SafeAreaView>
        </ImageBackground>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        backgroundColor: "transparent",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        zIndex: 40,
        marginLeft: 10,
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
    },
    palceholder: {
        flex: 1,
        width: '100%',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        paddingTop: 20,
        borderTopColor: 'gray',
        borderTopWidth: 0.2,
    },
    avatarPlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
      },
});


