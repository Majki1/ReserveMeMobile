import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';



function LoginScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login here
        navigation.navigate('Home');
      };
    
    return (
           <ImageBackground source={require('../assets/Dark.png')} style={styles.container}>
                <Text style={styles.title}>ReserveMe</Text>
                
                <View style={styles.credentialsGroup}>
                <TextInput 
                style={[styles.credentials, {top: 400}]} 
                placeholder="Username" 
                placeholderTextColor="black"
                onChangeText={(text) => setUsername(text)}
                value={username}
                />
                <TextInput 
                style={styles.credentials} 
                placeholder="Password" 
                secureTextEntry={true} 
                placeholderTextColor="black"
                onChangeText={(text) => setPassword(text)}
                value={password}
                />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <View>
                    <Text style={styles.loginText}> Login </Text>
                </View>
                </TouchableOpacity>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '',
        alignItems: 'center',
        zIndex: 0,
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
        zIndex: 40,
        position: 'absolute',
        top: 100,
    },
    loginButton: {
        height: 70,
        width: '70%',
        backgroundColor: 'cyan',
        opacity: 0.7,
        marginBottom: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    credentials: {
        width: '100%',
        height: 70,
        width: '90%',
        backgroundColor: 'lightgrey',
        opacity: 0.7,
        marginTop: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'start',
        padding: 20,
        position: 'absolute',
        top: 500,
        margin: 20,
    },
    credentialsGroup:{
        flexDirection: 'row',
        justifyContent: 'justify-between',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'transparent',
        width: '100%',

    }

});

export default LoginScreen;