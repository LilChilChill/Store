import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../const/colors'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text >
            <Text style={{fontSize: 22, fontWeight: 'bold' }}>
                Hello
            </Text>
            <Ionicons name='hand-left-outline' size={24} />
            {'\n'}
            <Text style={{fontSize: 18, color: '#6a6a6a'}}>
            Christie Doe
            </Text>
        </Text>
        <View style={styles.imageHeader}>
            <Image source={require('../asset/Doe.png')}/>
        </View>
      </View>

      <View style={{
        marginTop: 20,
        marginHorizontal: 20,
      }}>
        <Text style={{ fontSize: 24, color: '#363636', marginBottom: 20}}>Your Insignts</Text>
      </View>

      <SafeAreaView horizontal={true} style={styles.itemContainer}>
        <TouchableOpacity style={styles.box}>
        <View style={{flexDirection: 'column',}}> 
                <TouchableOpacity>
                    <Image source={require('../asset/scan.png')} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop: -20}}>
                <Text style={{fontSize : 16, textAlign: 'center', color: "#363636"}}>     
                    Scan new
                </Text>
                <Text style={{fontSize : 10, textAlign: 'center', color: "#B7B7C1"}}>
                    Scanned 483
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
        <View style={{flexDirection: 'row', }}> 
                <TouchableOpacity>
                    <View style={{backgroundColor: "#F6E3DB", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/alert.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: -20}}>
                <Text style={{fontSize : 16, textAlign: 'center', color: "#363636"}}>     
                    Counterfeits
                </Text>
                <Text style={{fontSize : 10, textAlign: 'center', color: "#B7B7C1"}}>
                    Counterfeited 32
                </Text>
            </View>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView horizontal={true} style={styles.itemContainer}>
        <TouchableOpacity style={styles.box}>
        <View style={{flexDirection: 'row', }}> 
                <TouchableOpacity>
                    <View style={{backgroundColor: "#D8F3F1", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/tick.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: -20}}>
                <Text style={{fontSize : 16, textAlign: 'center', color: "#363636"}}>     
                    Success
                </Text>
                <Text style={{fontSize : 10, textAlign: 'center', color: "#B7B7C1"}}>
                    Checkouts 8
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
        <View style={{flexDirection: 'row', }}> 
                <TouchableOpacity>
                    <View style={{backgroundColor: "#D0EDFB", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/cal.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: -20}}>
                <Text style={{fontSize : 16, textAlign: 'center', color: "#363636"}}>     
                    Directory
                </Text>
                <Text style={{fontSize : 10, textAlign: 'center', color: "#B7B7C1"}}>
                    History 26
                </Text>
            </View>
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.header}>
        <Text style={{fontSize: 22}}>
         Explore More 
        </Text>
        <TouchableOpacity style={styles.imageHeader}>
            <Ionicons name='arrow-forward-outline' size={24} />
        </TouchableOpacity>
      </View>

      

            
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginVertical: 40,
        backgroundColor: "#FFFFFF"
    },
    header: {
        marginTop: 40,
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    box: {
        width: 160,
        height: 180,
        backgroundColor: '#F8F8FB',
        marginBottom: 14,
        justifyContent: "space-evenly",
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "#E2E2E2"
    },
    footer:{
        marginBottom: 100
    }
})