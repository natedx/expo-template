import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {registerRootComponent} from "expo";
import Screens from "./Screens";

export default function App() {
  return (
      <View style={{flex: 1}}>
        <Screens/>
        <StatusBar style={"auto"}/>
      </View>
  );
}

registerRootComponent(App);
