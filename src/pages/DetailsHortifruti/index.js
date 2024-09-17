import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import Dot from '../../component/Dot';
import imagensHortifruti from '../../component/ImagensHortifruti';

export default function DetailsHortifruti({ navigation, route }) {

    const { imageSource } = route.params;

    const imageArrayHortifruti = Object.values(imagensHortifruti);

    const handleImagePressHortifruti = (imageSource) => {
        navigation.navigate('DetailsHortifruti', { imageSource });
    };

    navigation.setOptions({
        headerTitle: 'Detalhes da oferta:'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                source={imageSource}
                style={styles.produtoImg}
            />
            
            <View style={styles.dotContainer} opacity={0.4}>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot> 
            </View>
            <View>
                <Text style={styles.topText}>Mais ofetas no Mercado: </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {imageArrayHortifruti.map((imageSource, index) => (
                        <TouchableOpacity key={index} onPress={() => handleImagePressHortifruti(imageSource)}>
                            <Image
                                source={imageSource}
                                style={styles.produtosImg}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    produtoImg: {
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').width,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 10,
    },
    produtosImg: {
        width: 140,
        height: 190,
        borderRadius: 10,
        marginHorizontal: 15,
    },
    title: {
        paddingHorizontal: '2%', 
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%',
        alignSelf: 'center',
    },
    topText: {
        fontFamily: 'RobotoCondensedRegular',
        color: '#313638',
        fontSize: 28,
        marginHorizontal: '2%',
        marginVertical: '1%',
        justifyContent: 'center'
    },
});