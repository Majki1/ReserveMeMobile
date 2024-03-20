import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Footer({ }) {
    const navigation = useNavigation();

    const handleProfile = () => {
        navigation.navigate('Login');
    }
    return (
    <SafeAreaView style={styles.footer}>
    <Ionicons name="home" size={30} color="#fff" />
    <Ionicons name="search" size={30} color="#fff" />
    <Ionicons name="add-circle" size={30} color="#fff" />
    <Ionicons name="heart" size={30} color="#fff" />
    <TouchableOpacity onPress={handleProfile}>
    <Ionicons name="person" size={30} color="#fff" />
    </TouchableOpacity>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 100,
        borderTopWidth: 0.2,
        borderTopColor: 'gray',
        },
});