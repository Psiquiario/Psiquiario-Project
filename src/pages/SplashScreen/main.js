import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../assets/logo.png';

function Splash () {
    return (
        <View styles={styles.Container}>
            <LinearGradient
            colors={['rgba(73,73,133,1)', 'transparent']}
            style={styles.background}
            />
            <Image style={styles.Logo} source={Logo}/>
            <Text style={styles.Title}>Psiquiario</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A2A0C8',
    },
    Logo: {
        alignSelf: 'center',
        marginTop: 250
    },
    Title: {
        fontSize: 35,
        fontFamily: 'Poppins_700Bold',
        color: "#494985",
        alignSelf: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
})

export default Splash;