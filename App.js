import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import { useFonts, Poppins_400Regular , Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';
import { Roboto_400Regular, Roboto_300Light, } from '@expo-google-fonts/roboto';

import RoutesApp from './src/routes/RoutesApp';

export default function App() {
  let [fontsloaded] = useFonts({ //fontes usadas
    Poppins_400Regular,
    Poppins_700Bold, 
    Poppins_300Light,
    Roboto_400Regular,
    Roboto_300Light,
  });

  if (!fontsloaded){
    return <AppLoading />;
  } else{

  return(
    <>
      <RoutesApp />
      <StatusBar style="light" />
    </>

    ); 
  }
}

