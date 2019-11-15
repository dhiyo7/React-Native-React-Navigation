//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Feeds extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tvFeed}>Feeds</Text>
                <Button title="Go to Profile" />
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
        backgroundColor: '#fab1a0',
    },
    tvFeed:{
        fontSize:20,
        marginBottom:10,
        color:'white'
    }
});

//make this component available to the app
export default Feeds;
