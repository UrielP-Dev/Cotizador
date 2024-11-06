import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Result = ({ total, errors, capital, interes, meses }) => {
  return (
      <View style={styles.resultContainer}>
        {errors && errors.length > 0 ? (
            errors.map((error, index) => (
                <Text key={index} style={styles.errorText}>{error}</Text>
            ))
        ) : (
            <>
              <Text style={styles.resultText}>Capital: {capital ? `$${capital}` : "N/A"}</Text>
              <Text style={styles.resultText}>Interés: {interes ? `${interes}%` : "N/A"}</Text>
              <Text style={styles.resultText}>Meses: {meses ? `${meses} meses` : "N/A"}</Text>
              <Text style={styles.resultText}>
                Cantidad mensual a pagar: {total ? `$${total.monthly}` : "N/A"}
              </Text>
              <Text style={styles.resultText}>
                Total a pagar: {total ? `$${total.totalPay}` : "N/A"}
              </Text>
            </>
        )}
      </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  resultContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Fondo gris claro
    borderRadius: 10,
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
