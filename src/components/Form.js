import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'


export default function Form() {
  return (
    <View style = {styles.viewForm}>
        <View style={styles.viewInputs}>
            <TextInput 
            placeholder='Cantidad a pedir'
            keyboardType='numeric'
            style={styles.input}
            ></TextInput>
            <TextInput 
            placeholder='Interes %'
            keyboardType='numeric'
            style={[styles.input,styles.inputPercentage]}
            ></TextInput>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:0,
        paddingHorizontal:50,
        height:150,
        width: '85%',
        backgroundColor : colors.PRIMARY_COLOR,
        borderRadius:30,
        
    },
    viewInputs:{
        flexDirection:'row'
    },
    input:{
        backgroundColor:'#fff',
        height:50,
        width:'60%',
        marginBottom:10,
        marginTop:10,
        color:'#000',
        borderWidth:2,
        borderColor:colors.PRIMARY_COLOR,
        borderRadius:5,
        textAlign:'center',
        marginRight:5,
        paddingHorizontal:10
    },
    inputPercentage:{
        width:'40%',
        marginLeft:5
    }
})