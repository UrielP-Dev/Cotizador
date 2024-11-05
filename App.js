
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from './src/utils/colors'
import Form from './src/components/Form'
import { useState } from 'react';
import FooterComp from './src/components/FooterComp';
import Result from './src/components/Result';

export default function App() {

const [capital, setcapital] = useState(null)
const [interes, setinteres] = useState(null)
const [meses, setmeses] = useState(null)
const [total, settotal] = useState(null)

calcular = () => {
 
  if (!capital||!interes||!meses) {
    console.log('Llene todos los campos');
  }else{
    console.log(capital);
    console.log(interes);
    console.log(meses);
    const i = interes/100
    const fee = (capital * i) / (1 - Math.pow(1 + i, -meses));
    console.log(total);
    settotal({
      monthly: fee.toFixed(2),
      totalPay: (fee*meses).toFixed(2)
    }
    )
    
  }
  
  
  
}

  return (
    <>
      
      <View style={styles.container}>
      <Form setcapital={setcapital} setinteres={setinteres} setmeses={setmeses} />
      </View>
      <View style={styles.container2}>
      <Result total = {total}  setcapital={setcapital} setinteres={setinteres} setmeses={setmeses}></Result>
      </View>
      <View style={styles.container3}>
      <FooterComp calcular={calcular}></FooterComp>
      </View>
      


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    height:200,
    borderRadius:30,
    justifyContent: 'center',

  },
  container2: {
  
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    height:100,
    borderRadius:30,
    justifyContent: 'center',

  },
  container3: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    height:100,
    borderRadius:30,
    justifyContent: 'center',

  },
  text:{
    fontSize:25,
    color:"#fff",
    fontWeight:'black'
  }
});
