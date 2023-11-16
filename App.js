import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import BottomNavigator from './src/screens/BottomNavigation';
import Notifi from './src/screens/Notifi'
import Scan from './src/screens/Scan';
import Time from './src/screens/Time';
import Cart from './src/screens/Cart';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    WorkSans: require("./assets/fonts/Work_Sans/WorkSans-VariableFont_wght.ttf"),  
    Strac: require("./assets/fonts/straczynski/Straczynski.ttf"),
    sfPro: require("./assets/fonts/sf-pro-display-font/sf-pro-text-regular.ttf"),
    boldSfPro: require("./assets/fonts/sf-pro-display-font/sf-pro-text-bold.ttf"),
    heavySfPro: require("./assets/fonts/sf-pro-display-font/sf-pro-text-heavy.ttf"),
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  })

  const onLayoutRootView = useCallback(async() =>{
    
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    } 
  },[fontsLoaded] );

  if(!fontsLoaded){
    return null  
  }  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" style={{backgroundColor: "#EAEDF4"}} component={BottomNavigator}/>
        <Stack.Screen name="Notifi" component={Notifi } />
        <Stack.Screen name="Scan" component={Scan } />
        <Stack.Screen name="Time" component={Time } />
        <Stack.Screen name="Cart" component={Cart } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}