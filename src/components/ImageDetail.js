import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const ImageDetail = (props) => {
    return <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>{props.imageScore}</Text>
        </View>;
};



const styles = StyleSheet.create({});

export default ImageDetail;