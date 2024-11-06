import { StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useState } from 'react';
import colors from '../utils/colors';
import { Picker } from '@react-native-picker/picker';

export default function Form(props) {
    const { setcapital, setinteres, setmeses } = props;
    const [selectedMonths, setSelectedMonths] = useState();

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setcapital(e.nativeEvent.text)}
                />

                <TextInput
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChange={(e) => setinteres(e.nativeEvent.text)}
                />
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedMonths}
                    onValueChange={(itemValue) => {
                        setSelectedMonths(itemValue);
                        setmeses(itemValue);
                    }}
                >
                    <Picker.Item label="Seleccione el plazo" value={null} />
                    <Picker.Item label="3 meses" value={3} />
                    <Picker.Item label="6 meses" value={6} />
                    <Picker.Item label="9 meses" value={9} />
                    <Picker.Item label="12 meses" value={12} />
                    <Picker.Item label="24 meses" value={24} />
                </Picker>
            </View>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total = {selectedMonths ? `${selectedMonths} meses` : "N/A"}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: '85%',
        backgroundColor: colors.PRIMARY_COLOR,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
    },
    viewInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        width: '60%',
        marginBottom: 10,
        color: '#000',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 5,
        textAlign: 'center',
        paddingHorizontal: 10,
        fontSize: 16,
    },
    inputPercentage: {
        width: '35%',
    },
    pickerContainer: {
        backgroundColor: '#e0f7fa',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR_DARK,
        marginTop: 10,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        color: '#000',
    },
    totalContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});
