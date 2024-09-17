import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

import imagensMercado from '../../component/ImagensMercado';
import imagensHortifruti from '../../component/ImagensHortifruti';
import imagensAcougue from '../../component/ImagensAcougue';
import imagensPadaria from '../../component/ImagensPadaria';

const { width } = Dimensions.get('window');

export default function Home() {

    const navigation = useNavigation();

    const imageArrayMercado = Object.values(imagensMercado);
    const imageArrayHortifruti = Object.values(imagensHortifruti);
    const imageArrayPadaria = Object.values(imagensPadaria);
    const imageArrayAcougue = Object.values(imagensAcougue);

    const handleImagePress = (imageSource) => {
        navigation.navigate('Details', { imageSource });
    };

    const handleImagePressHortifruti = (imageSource) => {
        navigation.navigate('DetailsHortifruti', { imageSource });
    };

    const handleImagePressPadaria = (imageSource) => {
        navigation.navigate('DetailsPadaria', { imageSource });
    };

    const handleImagePressAcougue = (imageSource) => {
        navigation.navigate('DetailsAcougue', { imageSource });
    };

    const mapUrl = 'https://www.google.com.br/maps/place/Mercado+Ki+Pre%C3%A7o/@-30.0503146,-51.2003676,21z/data=!4m8!3m7!1s0x95197938880a8b53:0x26046c5cd64fdf1f!8m2!3d-30.0501923!4d-51.2002044!9m1!1b1!16s%2Fg%2F11l6s04qv5?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D';

    const openMap = () => {
        Linking.openURL(mapUrl).catch(err => console.error("Não foi possível abrir o link", err));
    };

    const email = 'gallertpaulo@gmail.com';
    const phoneNumber = '+5551984510948';
    const emailUrl = `mailto:${email}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    const openEmailClient = () => {
        Linking.openURL(emailUrl).catch(err => console.error("Não foi possível abrir o cliente de e-mail", err));
    };

    const openWhatsApp = () => {
        Linking.openURL(whatsappUrl).catch(err => console.error("Não foi possível abrir o WhatsApp", err));
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <View>
                    <Image 
                    source={require('../../assets/banner3.png')}
                    style={styles.image}
                    resizeMode='cover'
                    />
                </View>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={styles.menuText}>Mercado</Text>
                        <Text style={styles.menuText}>|</Text>
                        <Text style={styles.menuText}>HortiFruti</Text>
                        <Text style={styles.menuText}>|</Text>
                        <Text style={styles.menuText}>Padaria</Text>
                        <Text style={styles.menuText}>|</Text>
                        <Text style={styles.menuText}>Açougue</Text>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.line}/>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={styles.topText}>Ofetas no Mercado: </Text>
                <View style={styles.produtos}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {imageArrayMercado.map((imageSource, index) => (
                            <TouchableOpacity key={index} onPress={() => handleImagePress(imageSource)}>
                                <Image
                                    source={imageSource}
                                    style={styles.produtoImg}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <Text style={styles.topText}>Ofetas em HortiFruti: </Text>
                <View style={styles.produtos}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {imageArrayHortifruti.map((imageSource, index) => (
                            <TouchableOpacity key={index} onPress={() => handleImagePressHortifruti(imageSource)}>
                                <Image
                                    source={imageSource}
                                    style={styles.produtoImg}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <Text style={styles.topText}>Ofetas na Padaria: </Text>
                <View style={styles.produtos}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {imageArrayPadaria.map((imageSource, index) => (
                            <TouchableOpacity key={index} onPress={() => handleImagePressPadaria(imageSource)}>
                                <Image
                                    source={imageSource}
                                    style={styles.produtoImg}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>                

                <Text style={styles.topText}>Ofetas em Carnes: </Text>
                <View style={styles.produtos}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {imageArrayAcougue.map((imageSource, index) => (
                            <TouchableOpacity key={index} onPress={() => handleImagePressAcougue(imageSource)}>
                                <Image
                                    source={imageSource}
                                    style={styles.produtoImg}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>                
                <View style={styles.footer}>
                    <TouchableOpacity onPress={openMap} style={styles.button}>
                        <View style={{ flexDirection: 'row'}}>
                            <Image source={require('../../assets/google_maps_logo.png')} style={{ height: 33, width: 33 }}></Image>
                            <Text style={styles.buttonText}>Google Maps</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={openWhatsApp} style={styles.button}>
                        <View style={{ flexDirection: 'row'}}>
                            <Image source={require('../../assets/whatsapp_icon.png')} style={{ height: 23, width: 23, margin: 7, marginHorizontal: 7 }}></Image>
                            <Text style={styles.buttonText}>Whatsapp</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={openEmailClient} style={styles.button}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                            <Image source={require('../../assets/copyright_icon.png')} style={{ height: 27, width: 27, margin: 7}}></Image>
                            <Text style={[styles.buttonText, { color: '#767676'}]}>Contate o Desenvolvedor</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    header: {
        marginBottom: 8,
    },
    image: {
        position: 'relative',
        width: width,
        height: 210,
        marginTop: '5%',
    },
    menuText: {
        fontFamily: 'RobotoCondensedBold',
        alignContent: 'center',
        fontSize: 30,
        margin: 5,
        padding: 3,
        color: '#313638',
    },
    topText: {
        fontFamily: 'RobotoCondensedRegular',
        color: '#313638',
        fontSize: 24,
        marginHorizontal: '2%',
        marginVertical: '1%',
        justifyContent: 'center',
        marginTop: '5%',
    },
    produtos: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    line: {
        borderBottomColor: '#33658a',
        borderBottomWidth: 2,
    },
    produtoImg: {
        width: 140,
        height: 190,
        borderRadius: 10,
        marginHorizontal: 15,
    },
    footer: {
        backgroundColor: '#313638',
        padding: '3%',
        marginTop: '5%',
    },
    button: {
        padding: 6,
    },
    buttonText: {
        color: '#e8e9eb',
        fontFamily: 'RobotoCondensedRegular',
        fontSize: 22,
        padding: 6,
    },
    icon: {
        height: 40,
        width: 40,
    }
});
