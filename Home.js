//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tvHome}>Home</Text>
                <Button title="Go to Feed" />
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
        backgroundColor: '#0984e3',
    },
    tvHome:{
        fontSize:20,
        marginBottom:10,
        color: 'white'
    }
});

//make this component available to the app
export default Home;
