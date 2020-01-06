import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
   // return <Text style={styles.textStyle}>This is the home screen</Text>;
   const name = 'Dusty';
    return (
            <View>
                <Text style={styles.textStyle}>This is a test that seems to be failing!</Text>
                <Text style={styles.subHeaderStyle}>My name is {name}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;