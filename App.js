import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/anton';

import Route from './src/route';

export default function App() {

  let [fontsLoaded] = useFonts({
    'RobotoCondensedBold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    'RobotoCondensedRegular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true} />
      <Route/>
    </>
  );
} 
