import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons,  } from '@expo/vector-icons'

const Success = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-outline' size={28} style={{flex: 1, alignItems: 'center'}} color={"#5A6CF3"} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={require('../asset/payment.png')} style={{marginBottom: 40}}/>
        <Text style={{
            fontSize: 18,
            color: "#363636",
            fontWeight: "700",
            letterSpacing: 0.54,
            marginBottom: 10
        }}>
            Payment Success, Yayy!
        </Text>
        <Text style={{
            textAlign: 'center',
            fontSize: 14, 
            color: "#7A7A7A",
            fontWeight: "400",
            letterSpacing: 0.42,
            marginBottom: 10
        }}>
            we will send order details and invoice in
            {'\n'}
            your contact no. and registered email
        </Text>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginVertical: 20}}>
            <Text style={{
                fontSize: 16,
                color: "#5A6CF3",
                fontWeight: "700"
            }}>
                Check Details
            </Text>
            <Ionicons name='arrow-forward-outline' size={24} color={"#5A6CF3"} style={{marginLeft: 20}}/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            Download Invoice
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Success

const styles = StyleSheet.create({
    container: {
    flex: 1, 
    backgroundColor: "#FFFFFF"
  },
  headerContainer: {
      backgroundColor: "#FFFFFF",
      marginBottom: 80
  },  
  headerBack: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: "#F8F8FB",
    width: 30,
    height: 30,
    borderRadius: 9,
  },
  button: {
    marginBottom: 130,
    marginHorizontal: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A6CF3',
    borderRadius: 16
  },
  buttonText: {
    textAlign: 'center', 
    color: '#FFF', 
    fontSize: 18,
    fontWeight: 'bold'
  },

})