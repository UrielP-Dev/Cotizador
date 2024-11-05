import { View, Text } from 'react-native'
import React from 'react'

const Result = ({total}) => {
  return (
    <View>
    {total ? <Text>Cantidad mensual a pagar: {total.monthly}</Text> : <Text>Cantidad mensual a pagar: 0</Text>}
    {total ? <Text> Total a pagar: {total.totalPay}</Text> : <Text>Total a pagar: 0</Text>}

    </View>
  )
}

export default Result