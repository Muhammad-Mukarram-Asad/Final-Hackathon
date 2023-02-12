import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function HomeScreen() {
  return (
   <View style={styles.container}>
    {/* <Image source={{uri:"https://www.figma.com/file/e8juVRuVFr41nDUtVX2xlX/design-doc-saylani-online-discount-store?node-id=101%3A3&t=QuMdrMo0VIGZDT8k-4",width:200, height:150}} /> */}
   <Image source={{uri:"https://i.pinimg.com/736x/9c/9a/ef/9c9aefcf49d7f51f9be204b650e7362e.jpg", width:300, height:100}} />
    <Text style={{color:"green", fontSize:28, textTransform:"uppercase"}}>Saylani Welfare</Text>
    <Text style={{color:"blue", fontSize:16, textTransform:"uppercase"}}> Online Discount Store</Text>

    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text}>Get Started</Text>
    </TouchableOpacity>

   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:12,
      shadowOffset: "0px 2px",

    },
    btn: {
        width:200,
        height: 50,
        borderWidth:2,
        borderColor:"green",
        borderRadius: 20,
        marginTop: 20,
        backgroundColor:"green",
    },
    btn_text:{
        color: "white",
        textAlign:"center",
        fontSize: 22,
        paddingTop:5
    }

  });
  
