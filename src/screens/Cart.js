import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Cart = ({navigation}) => {
  return (
    <SafeAreaView styles={styles.container}>  
      <View >
        <TouchableOpacity style={styles.header}>
          <Ionicons name='chevron-back-outline' size={28} style={{flex: 1, alignItems: 'center'}} color={"#F08F5F"} />
        </TouchableOpacity>
      </View>

      <View style={{marginHorizontal: 20, marginTop: 40, marginBottom: 20}}>
          <Text style={{fontSize: 25}}>
            Your Cart 👍🏻
          </Text>
      </View>

      <View style={styles.item}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Image source={require('../asset/bottle-item.png')} />
            <View style={{flexDirection: 'column', margin: 10, }}>
              <Text style={{
                fontSize: 10,
                color: "#B1B1B1"
              }}>
                Lauren's
              </Text>
              <Text style={{
                fontSize: 12, 
                color: "#494949"
              }}>
                Orange Juice
              </Text>
              <Text style={{
                fontSize: 16,
                color: "#F08F5F"
              }}>
                ₹ 149
              </Text>
            </View>
          </View>
          
          <View style={{flexDirection: 'row', backgroundColor: "#FFFFFF", borderRadius: 5, alignItems: 'center',}}> 
            <TouchableOpacity>
              <Ionicons name='remove-outline' size={20} color={"#F08F5F"}/>
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10, fontSize: 10}}>
              2
            </Text>
            <TouchableOpacity>
              <Ionicons name='add-outline' size={20} color={"#F08F5F"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Image source={require('../asset/item2.png')} />
            <View style={{flexDirection: 'column', margin: 10, }}>
              <Text style={{
                fontSize: 10,
                color: "#B1B1B1"
              }}>
                Baskin's
              </Text>
              <Text style={{
                fontSize: 12, 
                color: "#494949"
              }}>
                Skimmed Milk
              </Text>
              <Text style={{
                fontSize: 16,
                color: "#F08F5F"
              }}>
                ₹ 129
              </Text>
            </View>
          </View>
          
          <View style={{flexDirection: 'row', backgroundColor: "#FFFFFF", borderRadius: 5, alignItems: 'center',}}> 
            <TouchableOpacity>
              <Ionicons name='remove-outline' size={20} color={"#F08F5F"}/>
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10, fontSize: 10}}>
              2
            </Text>
            <TouchableOpacity>
              <Ionicons name='add-outline' size={20} color={"#F08F5F"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.item}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Image source={require('../asset/item3.png')} />
            <View style={{flexDirection: 'column', margin: 10, }}>
              <Text style={{
                fontSize: 10,
                color: "#B1B1B1"
              }}>
                Marley's
              </Text>
              <Text style={{
                fontSize: 12, 
                color: "#494949"
              }}>
                Aloe Vera Lotion
              </Text>
              <Text style={{
                fontSize: 16,
                color: "#F08F5F"
              }}>
                ₹ 1249
              </Text>
            </View>
          </View>
          
          <View style={{flexDirection: 'row', backgroundColor: "#FFFFFF", borderRadius: 5, alignItems: 'center',}}> 
            <TouchableOpacity>
              <Ionicons name='remove-outline' size={20} color={"#F08F5F"}/>
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10, fontSize: 10}}>
              2
            </Text>
            <TouchableOpacity>
              <Ionicons name='add-outline' size={20} color={"#F08F5F"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20}}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#363636'}}>
          Total
        </Text>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#F08F5F'}}>
          ₹ 1,527
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Check out")} >
        <Text style={styles.buttonText}>
          Process to checkout
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginVertical: 40,
    marginHorizontal: 20,
    backgroundColor: "ffffff"
  },
  header: {
      marginTop: 60,
      marginHorizontal: 20,
      backgroundColor: "#F8F8FB",
      width: 30,
      height: 30,
      borderRadius: 9
  },
  item:{
    backgroundColor: "#F8F8FB",
    width: 320,
    height: 95,
    marginHorizontal: 20,
    borderRadius: 10,
    margin: 10
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 10
  },
  button: {
    marginHorizontal: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F08F5F',
    borderRadius: 16
  },
  buttonText: {
    textAlign: 'center', 
    color: '#FFF', 
    fontSize: 18,
    fontWeight: 'bold'
  },
  
})