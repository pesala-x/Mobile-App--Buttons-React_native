import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';

export default function App() {

  const showToast =() => {
    console.log("----1----");
    console.log("Toast 1 is Clicked..");
    ToastAndroid.show(
      "Button 1",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  const showToast2 = () => {
    console.log("====2====");
    console.log("Tosat Second is Clicked ");
    ToastAndroid.show(
      "Yamete Kudasai... aaaaai... h.. 😫",
      ToastAndroid.SHORT,
      ToastAndroid.TOP
    );
  };

  return (
    <View style={styles.container}>
      {/* Text Elements */}
      <Text style= {styles.text1}>This Sample App for React-Native Button !</Text>
      <Text style= {styles.text2}>Best Practices</Text>
      <Text style= {styles.text3}> Enjoy..!</Text>
      <StatusBar style="auto" />

      {/* buttons  */}
      <TouchableOpacity style ={styles.button1} onPress={showToast}>
        <Text style = {{color:"#fff", fontSize:20 }}>Click Me First</Text>
      </TouchableOpacity>

      <TouchableOpacity style ={styles.button1} onPress={showToast2}>
      <Text style={{color: "#fff", fontSize: 20}}>Click Me2</Text>
      </TouchableOpacity>


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
  button1:{
    backgroundColor: "#29b6f6",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    marginTop:30,
    margin: 10,
    padding: 10,
    borderRadius: 10,
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
