import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Produtos(props) {

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image 
                source={props.img}
                style={styles.produtoImg}
            />
            <Text style={styles.produtoText}>
                { props.children }
            </Text>
            <View opacity={0.4}>
                <Text style={styles.produtoText}>
                    { props.cost }
                </Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    produtoImg: {
        width: 170,
        height: 220,
        borderRadius: 8,
    },
    produtoText: {
        fontSize: 16,
    },
});