import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
// Utils
import { supabase } from './lib/supabase'
// Views
import Auth from './Screens/Auth'
import Account from './Screens/Account'
import Home from './Screens/Home'
// Stores
import { useStore } from './Stores/useStore';
import { Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();


export default function App() {
  const [session,setSession] = useStore((state) => [
    state.session,
    state.setSession,
  ])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <>
    <StatusBar translucent={true} />
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={
        {
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }
      }
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Auth" component={Auth} />
      </Drawer.Navigator>
     </NavigationContainer>
     </>
  )
}