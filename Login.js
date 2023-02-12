import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
// import {useNavigation} from '@react-navigation/native';

export default function Login() {
    // const navigation = useNavigation();

  return (
    <View style={styles.container}>
         <Text style={{color:"green", fontSize:28, textTransform:"uppercase"}}>Saylani Welfare</Text>
         <Text style={{color:"blue", fontSize:16, textTransform:"uppercase"}}> Online Discount Store</Text>
      
        <View style={styles.input_field}>
            <TextInput style={styles.text_input} placeholder='Email'></TextInput>
            <Image style={styles.input_image} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOKWxdW8wyji3KNo1i_9AcDu6L8K2NLw6JQ&usqp=CAU"}} />

        </View>

        <View style={styles.input_field}>
            <TextInput style={styles.text_input} placeholder='Password'></TextInput>
            <Image style={styles.input_image} source={{uri:"https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png"}} />

        </View>

        <Text style={{color:"blue",fontSize:22, textAlign:"left"}}>Forgot Password?</Text>

        <TouchableOpacity style={styles.signup_btn}>
            <Text style={{textAlign:"center", fontSize:24,color:"white", paddingTop:6}}> Sign In</Text>
        </TouchableOpacity>

        <Text style={{color:"blue",fontSize:20, textAlign:"center", marginTop:10}}>
             Don't have an account? Register
        </Text>

        {/* <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    /> */}
      
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
      input_field:{
        marginTop: 10,
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop:15
      },
      text_input:{
        borderBottomWidth:0.5,
        height:48,
        borderBottomColor:'grey',
        marginBottom:10,
        fontSize:20,
        color:"grey",
        width:"70%"
      },
      input_image: {
        width:40,
        height:40,
      },

      signup_btn: {
        width: 200,
        height: 50,
        backgroundColor:"green",
        borderRadius: 20,
        marginTop: 20
      }

})

