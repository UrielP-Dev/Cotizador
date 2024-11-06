import { StyleSheet, View } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import { useState, useEffect } from 'react';
import FooterComp from './src/components/FooterComp';
import Result from './src/components/Result';

export default function App() {
  const [capital, setcapital] = useState(null);
  const [interes, setinteres] = useState(null);
  const [meses, setmeses] = useState(null);
  const [total, settotal] = useState(null);
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    calcular();
  }, [capital, interes, meses]);

  const calcular = () => {
    let newErrors = [];

    if (!capital) newErrors.push("Llene el campo 'Cantidad a pedir'.");
    if (!interes) newErrors.push("Llene el campo 'Interés %'.");
    if (!meses) newErrors.push("Seleccione el plazo.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      settotal(null);
    } else {
      setErrors([]);
      const i = interes / 100;
      const fee = (capital * i) / (1 - Math.pow(1 + i, -meses));
      settotal({
        monthly: fee.toFixed(2),
        totalPay: (fee * meses).toFixed(2)
      });
    }
  };

  return (
      <>
        <View style={styles.container}>
          <Form setcapital={setcapital} setinteres={setinteres} setmeses={setmeses} />
        </View>
        <View style={styles.container2}>
          <Result
              total={total}
              errors={errors}
              capital={capital}
              interes={interes}
              meses={meses}
          />
        </View>
        <View style={styles.container3}>
          <FooterComp calcular={calcular} />
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    height: 100,
    bottom: 0,
    borderRadius: 30,
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    height: 100,
    borderRadius: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: "#fff",
    fontWeight: 'black'
  }
});
