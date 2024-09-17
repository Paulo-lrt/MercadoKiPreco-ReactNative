import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Dot() {
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        backgroundColor: '#000',
        marginHorizontal: '2.5%',
        elevation: 5,
    }
})