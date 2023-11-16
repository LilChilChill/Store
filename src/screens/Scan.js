import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Scan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../asset/bottle.png')}
        style={styles.backgroundImage}
      >
        <View >
          <TouchableOpacity style={styles.header}>
            <Ionicons name='chevron-back-outline' size={28} style={{flex: 1, alignItems: 'center'}} color={"#F08F5F"} />
          </TouchableOpacity>
        </View>

        <View style={styles.scan}>
          <View style={styles.scanUp}>
            <Image source={require('../asset/up-right.png')} />
            <Image source={require('../asset/up-left.png')} />
          </View>
          <View style={styles.scanDown}>
            <Image source={require('../asset/down-right.png')} />
            <Image source={require('../asset/down-left.png')} />
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
                Baskin's
                {'\n'}
              </Text>
              <Text style={{
                fontSize: 12, 
                color: "#494949"
              }}>
                Skimmed Milk
              </Text>
            </View>
          </View>
          
          <View > 
            <TouchableOpacity style={styles.addBtn}>
              <Ionicons name='add-outline' size={24} color={"#FFF"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'flex-end'
  },
  header: {
    marginHorizontal: 20,
    backgroundColor: "#F8F8FB",
    width: 30,
    height: 30,
    marginBottom: 100, 
    borderRadius: 9
  },
  scan:{
    marginHorizontal: 20
  },
  scanUp:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 320
  },
  scanDown:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 15
  },
  item:{
    justifyContent: 'flex-end',
    backgroundColor: "#F8F8FB",
    width: 320,
    height: 95,
    marginHorizontal: 20,
    borderRadius: 10,
    margin: 10,
    marginBottom: 30
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 15
  },
  addBtn: {
    backgroundColor: "#5A6CF3",
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50, 
    width: 50,  
    marginBottom: 5
  }
});
