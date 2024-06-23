import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Text Elements */}
      <Text style= {styles.text1}>This Sample App for React-Native Button !</Text>
      <Text style= {styles.text2}>Best Practices</Text>
      <Text style= {styles.text3}> Enjoy..!</Text>
      <StatusBar style="auto" />

      {/* buttons  */}
      

    </View>
  );
}

const styles = StyleSheet.create({

  // bacgroud Styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Button Styles
  Button:{
    
  },

  // Text Colors
  text1:{
    color:"#304ffe",
  },

  text2:{
    color:"red",
  },
  
  text3:{
    color:"green",
  }
  

});
