import React from "react";
import { Text, StyleSheet, StatusBar, SafeAreaView, Platform, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StatusBarHeight = StatusBar.currentHeight;

export default function Navbar({}) {
    const navigation = useNavigation();

    const handleInbox = () => {
        navigation.navigate('Inbox');
    }

    const handleNotifications = () => {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.navbar}>
            <Text style={styles.title}>ReserveMe</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handleNotifications}>
                    <Ionicons name="notifications" size={30} color="#fff" style={styles.messageIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleInbox}>
                    <FontAwesome name="inbox" size={30} color="#fff" style={styles.messageIcon}/> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        zIndex: 40,
        position: 'absolute',
        right: 250,
    },
    navbar: {
        position: 'absolute',
        top: Platform.OS === 'android' ? StatusBarHeight + 10 : 60,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
    },
    messageIcon: {
        marginRight: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
    },
});