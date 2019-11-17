//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tvHome}>Home</Text>
                <Button title="Go to Feed" onPress={() => this.props.navigation.navigate('Feed')} />
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
    },
    tvHome:{
        fontSize:20,
        marginBottom:10,
        color: 'black'
    }
});

//make this component available to the app
export default Home;
