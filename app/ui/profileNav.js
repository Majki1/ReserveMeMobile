import React from "react";
import { View, StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileNav({ navigation }) {
    return (
            <View style={styles.navbar}>
                <View style={styles.leftItems}>
                <Ionicons name="arrow-back" size={30} color="white" onPress={() => navigation.goBack()}/>
                <Text style={styles.title}>Dummy user 1</Text>
                </View>
                <View style={styles.rightIcons}>
                <Ionicons name="pencil" size={24} color="white" style={{top: 3}}/>
                <Ionicons name="menu" size={30} color="white"/>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        right: 0,
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        zIndex: 100,
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
      rightIcons: {
        flexDirection: 'row',
        width: 60, 
        justifyContent: 'space-between',
      },
      leftItems: {
        flexDirection: 'row',
        alignItems: 'center',
      }
});