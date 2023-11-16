import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Scan = () => {
  return (
    <SafeAreaView styles={styles.container}>  
      <View style={styles.header}>
        <Ionicons name='chevron-back-outline' size={24} />
      </View>
      <Image source={require('../asset/bottle.png')}/>

      <View style={styles.item}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Scan

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginVertical: 40
  },
  header: {
      marginTop: 20,
      flexDirection: "row",
      marginHorizontal: 20,
      justifyContent: 'space-between'
  },
})