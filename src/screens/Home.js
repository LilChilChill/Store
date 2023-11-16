import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../const/colors'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 22}}>
            Hello <Ionicons name='hand-left-outline' size={24} />
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
        <Text style={{ fontSize: 24, color: '#6a6a6a'}}>Your Insignts</Text>
      </View>

      <SafeAreaView horizontal={true} style={styles.itemContainer}>
        <View style={styles.box}>
        <View style={{flexDirection: 'row', }}> 

                <TouchableOpacity>
                    {/* <Ionicons  
                        name='scan-sharp'  
                        size={50} 
                        color={COLORS.white}
                        style={{backgroundColor: "#53B175", borderRadius: 15, padding: 10}} /> */}
                    <Image source={require('../asset/scan.png')} />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
        <View style={{flexDirection: 'row', }}> 

                <TouchableOpacity>
                    <View style={{backgroundColor: "#F6E3DB", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/alert.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>

      <SafeAreaView horizontal={true} style={styles.itemContainer}>
        <View style={styles.box}>
        <View style={{flexDirection: 'row', }}> 

                <TouchableOpacity>
                <View style={{backgroundColor: "#D8F3F1", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/tick.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
        <View style={{flexDirection: 'row', }}> 

                <TouchableOpacity>
                    <View style={{backgroundColor: "#D0EDFB", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/cal.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>

      <View style={styles.header}>
        <Text style={{fontSize: 22}}>
         Explore More 
        </Text>
        <View style={styles.imageHeader}>
            <Ionicons name='arrow-forward-outline' size={24} />
        </View>
      </View>

                        
      <SafeAreaView horizontal={true} style={styles.itemContainer}>
        <View style={styles.box}>
        <View style={{flexDirection: 'row', }}> 

                <TouchableOpacity>
                    {/* <Ionicons  
                        name='scan-sharp'  
                        size={50} 
                        color={COLORS.white}
                        style={{backgroundColor: "#53B175", borderRadius: 15, padding: 10}} /> */}
                    <Image source={require('../asset/scan.png')} />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
        <View style={{flexDirection: 'row', }}> 

                <TouchableOpacity>
                    <View style={{backgroundColor: "#F6E3DB", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/alert.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>

      <SafeAreaView horizontal={true} style={styles.itemContainer}>
        <View style={styles.box}>
        <View style={{flexDirection: 'row', }}> 

                <TouchableOpacity>
                <View style={{backgroundColor: "#D8F3F1", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/tick.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
        <View style={{flexDirection: 'row', }}> 

                <TouchableOpacity>
                    <View style={{backgroundColor: "#D0EDFB", padding: 15, borderRadius: 10,}}> 
                        <Image source={require('../asset/cal.png')} style={{ }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default Home

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
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        width: 160,
        height: 180,
        backgroundColor: '#FFFFFF',
        margin: 10,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#E2E2E2"
    },
})