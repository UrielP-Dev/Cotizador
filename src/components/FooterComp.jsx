import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const FooterComp = ({ calcular }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boton} onPress={calcular}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FooterComp;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#333',
    },
    text: {
        fontSize: 25,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boton: {
        width: '80%',
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#1e90ff',
    }
});
