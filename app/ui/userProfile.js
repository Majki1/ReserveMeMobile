import React from "react";
import { View, StyleSheet, Text, ImageBackground, SafeAreaView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";

export default function ProfilePage({ navigation }) {
    const Posts = [
        {id: 1, uri: 'https://picsum.photos/200'},
        {id: 2, uri: 'https://picsum.photos/200'},
        {id: 3, uri: 'https://picsum.photos/200'},
        {id: 4, uri: 'https://picsum.photos/200'},
        {id: 5, uri: 'https://picsum.photos/200'},
        {id: 6, uri: 'https://picsum.photos/200'},
        {id: 7, uri: 'https://picsum.photos/200'},
        {id: 8, uri: 'https://picsum.photos/200'},
        {id: 9, uri: 'https://picsum.photos/200'},
        {id: 10, uri: 'https://picsum.photos/200'},
    ];

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatarPlaceholder}>
                    <Ionicons name="person" size={80} color="white" style={{}}/>
                </View>
                <View style={styles.profileStats}>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>150</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>300</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statNumber}>4.5</Text>
                        <Text style={styles.statLabel}>Rating</Text>
                    </View>
                </View>
            </View>
            <View style={styles.placeholder}>
            <View style={styles.profileBio}>
            <Text style={styles.username}>Dummy user 1</Text>
            <Text style={styles.userBio}>This is a dummy bio</Text>
            </View>
            <View style={styles.Posts}>
            <FlatList
                data={Posts}
                renderItem={({ item }) => (
                    <Image source={{uri: item.uri}} style={styles.image} />
                )}
                keyExtractor={item => item.id}
                numColumns={3}
            />
            </View>
            </View>
        </View>
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
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    profileStats: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 40,
        width: '60%', // adjust this value as needed
      },
      stat: {
        alignItems: 'center',
      },
      statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      statLabel: {
        fontSize: 16,
        color: 'white',
      },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    userBio: {
        fontSize: 15,
        color: 'gainsboro',

    },
    profileBio: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20,
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholder: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    Posts: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    image: {
        width: '33.33%',
        aspectRatio: 1,
      },
});