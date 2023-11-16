import { StyleSheet, Text, View, Animated} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../const/colors'
import Home from './Home'
import Scan from './Scan'
import Notifi from './Notifi'
import Time from './Time'
import Cart from './Cart'

const Tap = createBottomTabNavigator();

const BottomNavigator = () =>{
    
    const screenOptions = {
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            color: "#FFFFFF",
        },
    }
    return(
        <Tap.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tap.Screen 
            name='Home' 
            component={Home} 
            options={{tabBarIcon:({focused})=> <Ionicons name='home-outline' size={24} color={focused ? COLORS.theme : COLORS.dark} />

        }}/>
            <Tap.Screen 
                name='Notifi' 
                component={Notifi} 
                options={{tabBarIcon:({focused})=> <Ionicons name='notifications-outline' size={24} color={focused ? COLORS.theme : COLORS.dark} />

            }}/>
            <Tap.Screen 
                name='Scan' 
                component={Scan} 
                options={{tabBarIcon:({focused})=> <Ionicons name='scan-outline' size={24} color={focused ? COLORS.theme : COLORS.dark} />

            }}/>
            <Tap.Screen 
                name='Time' 
                component={Time } 
                options={{tabBarIcon:({focused})=> <Ionicons name='time-outline' size={24} color={focused ? COLORS.theme : COLORS.dark} />

            }}/>
            <Tap.Screen 
                name='Cart ' 
                component={Cart} 
                options={{tabBarIcon:({focused})=> <Ionicons name='cart-outline' size={24} color={focused ? COLORS.theme : COLORS.dark} />

            }}/>
        </Tap.Navigator>
    )
}

export default BottomNavigator
