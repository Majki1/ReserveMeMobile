import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function Feed({ navigation }) {

    const FeedItem = [
        {
            id: 1,
            title: "Title 1",
            description: "Description 1",
            username: "User 1",
        },
        {
            id: 2,
            title: "Title 2",
            description: "Description 2",
            username: "User 2",
        },
        {
            id: 3,
            title: "Title 3",
            description: "Description 3",
            username: "User 3",
        },
        {
            id: 4,
            title: "Title 4",
            description: "Description 4",
            username: "User 4",
        },
        {
            id: 5,
            title: "Title 5",
            description: "Description 5",
            username: "User 5",
        },
        {
            id: 6,
            title: "Title 6",
            description: "Description 6",
            username: "User 6",
        },
        {
            id: 7,
            title: "Title 7",
            description: "Description 7",
            username: "User 7",
        },
        {
            id: 8,
            title: "Title 8",
            description: "Description 8",
            username: "User 8",
        },
        {
            id: 9,
            title: "Title 9",
            description: "Description 9",
            username: "User 9",
        },
        {
            id: 10,
            title: "Title 10",
            description: "Description 10",
            username: "User 10",
        },
    ]
        
    
    return (
        <View style={styles.container}>
        <FlatList 
          data={FeedItem}
          style={{ width: '100%' }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <View style={styles.header}>
                <View style={styles.avatarPlaceholder} />
                <Text style={styles.username}>{item.username}</Text>
              </View>
              <View style={styles.imagePlaceholder} />
              <View style={styles.actions}>
                <Ionicons name="heart-outline" size={35} color="white" />
                <Ionicons name="chatbubble-outline" size={32} color="white" />
              </View>
              <Text style={{ color: 'white', marginBottom: 10, marginLeft: 10 }}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      width: '100%',
    },
    post: {
      marginBottom: 50,
      height: 550,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    avatarPlaceholder: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#ccc',
      marginRight: 10,
    },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'left',
    },
    imagePlaceholder: {
      width: '100%',
      height: 400,
      backgroundColor: '#ccc',
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '23%',
      padding: 10,
    },
  });
