import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" 
            imageSource={require('../../assets/forest.jpg')} 
            imageScore="Image Score - 3" 
        />
        <ImageDetail title="Beach" 
            imageSource={require('../../assets/beach.jpg')} 
            imageScore="Image Score - 9" 
        />
        <ImageDetail title="Mountain" 
            imageSource={require('../../assets/mountain.jpg')} 
            imageScore="Image Score - 300" 
        />
    </View>;
};


const styles = StyleSheet.create({});

export default ImageScreen;