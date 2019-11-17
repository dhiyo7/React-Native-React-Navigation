//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Feeds extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tvFeed}>Feeds</Text>
                <Button title="Go to Profile" onPress={() => this.props.navigation.navigate('ProfileScreen')}/>
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
    tvFeed:{
        fontSize:20,
        marginBottom:10,
        color:'black'
    }
});

//make this component available to the app
export default Feeds;
