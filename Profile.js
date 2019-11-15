//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tvProfile}>Profile</Text>
                <Button title="Go to Home"/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55efc4',
    },
    tvProfile:{
        fontSize:20,
        marginBottom:10,
        color:'white'
    }
});

//make this component available to the app
export default Profile;
