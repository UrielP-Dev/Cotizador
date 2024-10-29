
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/utils/colors'
import Form from './src/components/Form'

export default function App() {
  return (
    <>
      
      <View style={styles.container}>
        
        <Form/>
      </View>
      <View>
        <Text>Body</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:0.5,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    height:200,
    borderRadius:30,
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
    color:"#fff",
    fontWeight:'black'
  }
});
