import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { Ionicons,  } from '@expo/vector-icons'
import React, { useState} from 'react'

const Checkout = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [isButton1Pressed, setButton1Pressed] = useState(false);
  const [isButton2Pressed, setButton2Pressed] = useState(false);

  const handleButton1Press = () => {
    setButton1Pressed(true);
    setButton2Pressed(false);
  };

  const handleButton2Press = () => {
    setButton1Pressed(false);
    setButton2Pressed(true);
  };
  const formatCardNumber = (input) => {
    const formattedInput = input.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();

    setCardNumber(formattedInput);
  };
  
  return (
    <ScrollView styles={styles.container}>  
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-outline' size={28} style={{flex: 1, alignItems: 'center'}} color={"#25D482"} />
        </TouchableOpacity>
        <View style={styles.headerText}>
            <Text style={{color: "#363636", fontSize: 22}}>
            Checkout 💳
            </Text>
            <View style={{
                alignItems: "flex-end"
            }}>
                <Text style={{color: "#25D482", fontSize: 20}}>
                    ₹ 1,527
                </Text>
                <Text style={{color: "#B1B1B1", fontSize: 14}}>
                    Including GST (18%)
                </Text>
            </View>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleButton1Press} style={[styles.button, { backgroundColor: isButton1Pressed ? '#25D482' : '#FFFFFF', }]}>
          <View style={{flexDirection: "row", alignItems: "center",}}>
            <Ionicons name='card' size={24} style={{ color: isButton1Pressed ? 'white' : 'black'}} />
              <Text style={{ color: isButton1Pressed ? 'white' : 'black', fontSize: 18}}>
                {" "}
                Credit card
              </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleButton2Press} style={[styles.button, { backgroundColor: isButton2Pressed ? '#25D482' : '#FFFFFF', }]}>
          <View style={{flexDirection: "row", alignItems: "center",}}>
            <Ionicons name='logo-apple' size={24} style={{ color: isButton2Pressed ? 'white' : 'black'}} />
              <Text style={{ color: isButton2Pressed ? 'white' : 'black', fontSize: 18}}>
                {" "}
                Apple pay
              </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <Text style={{fontSize: 16, fontWeight: 700, color: "#3A3C3F", letterSpacing: 0.32, marginBottom: 10}}>
          Card number
        </Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="5261 4141 0151 8472"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={formatCardNumber}
            maxLength={19}
          />
          <Image source={require('../asset/CardLogo.png')} style={{ marginRight: 40 , resizeMode: 'contain'}}/>
          <Image source={require('../asset/CardIcon.png')} style={{ marginRight: 20}}/>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={{fontSize: 16, fontWeight: 700, color: "#3A3C3F", letterSpacing: 0.32, marginBottom: 10}}>
          Cardholder name
        </Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Christie Doe"
          />
        </View>
      </View>

      <View style={{flexDirection: "row", alignItems: 'center', justifyContent: "space-evenly"}}>
        <View style={styles.info}>
          <Text style={{fontSize: 16, fontWeight: 700, color: "#3A3C3F", letterSpacing: 0.32, marginBottom: 10}}>
            Expiry date
          </Text>
          <View style={styles.cardNum}>
            <TextInput
              style={styles.inputNum}
              placeholder="06   /   2024"
            />
          </View>
        </View>

        <View style={styles.info}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 700, color: "#3A3C3F", letterSpacing: 0.32, marginBottom: 10,}}>
              CVV / CVC
            </Text>
            <TouchableOpacity>
              <Ionicons name='help-outline' size={20} color={"#25D482"} style={{backgroundColor: "#d3f6e6", padding: 0, borderRadius: 20, marginBottom: 10, marginLeft: 20}} />
            </TouchableOpacity>
          </View>
          <View style={styles.cardNum}>
            <TextInput
              style={styles.inputNum}
              placeholder="915"
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={{
          textAlign: 'center',
          color: "#B1B1B1",
          letterSpacing: 0.32,
          fontSize: 12,
          marginTop: 10,
        }}>
          We will send you an order details to your 
          {'\n'} 
          email after the successfull payment
          {'\n'}
        </Text>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Success")}>
        <Text style={styles.footerButtonText}>
          <Image source={require("../asset/lock.png")} />
          {'    '}
          Pay for the order
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    headerContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 40, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0,
        height: 230,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },  
    headerBack: {
      marginTop: 60,
      marginHorizontal: 20,
      backgroundColor: "#F8F8FB",
      width: 30,
      height: 30,
      borderRadius: 9,
    },
    headerText: {
        margin: 20, 
        marginTop: 40,
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center"
    },
    headerBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
    },
    button: {
      width: 150,
      height: 60,
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -30,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 5,
    },
    info: {
      margin: 20,
      justifyContent: 'center',
    },
    card:{
      flexDirection: 'row',
      backgroundColor: "#F8F8FB",
      alignItems: 'center',
      height: 50,
      borderRadius: 16
    },
    input:{
      flex: 1,
      marginHorizontal:20,
      borderRadius: 16
    },
    icon: {
      marginLeft: 10,
      width: 20,
      height: 20,
    },
    cardNum: {
      backgroundColor: "#F8F8FB",
      alignItems: 'center',
      height: 50,
      width: 140,
      borderRadius: 16
    },
    inputNum:{
      flex: 1,
      marginRight: 30,
      borderRadius: 16
    },
    footer:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#FFFFFF"
    },
    footerButton: {
      marginHorizontal: 40,
      height: 60,
      width: "85%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#25D482',
      borderRadius: 16,
      marginBottom: 80
    },
    footerButtonText: {
      textAlign: 'center', 
      color: '#FFF', 
      fontSize: 18,
      fontWeight: 'bold'
    },
})