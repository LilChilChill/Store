import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Cart = () => {
  return (
    <SafeAreaView styles={styles.container}>  
      <View >
        <TouchableOpacity style={styles.header}>
          <Ionicons name='chevron-back-outline' size={24} style={{flex: 1, alignItems: 'center'}} />
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
                Lauren’s
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
          
          <Text style={{textAlignt: 'center'}}>
            Hello
          </Text>
        </View>
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
                Lauren’s
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
          
          <Text style={{textAlignt: 'center'}}>
            Hello
          </Text>
        </View>
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
                Lauren’s
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
          
          <Text style={{textAlignt: 'center'}}>
            Hello
          </Text>
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
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginVertical: 40,
    marginHorizontal: 20
  },
  header: {
      marginTop: 40,
      marginHorizontal: 20,
      backgroundColor: "#F8F8FB",
      width: 30,
      height: 30
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
    alignItems: 'center',
    margin: 10
  }
})