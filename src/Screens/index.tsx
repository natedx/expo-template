import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {CustomDarkTheme, CustomDefaultTheme} from "../Theme";
//Navigation
import {RootParamList} from "./navigationTypes";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';

//Screens
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

// const Stack = createStackNavigator<RootParamList>();
const Tab = createBottomTabNavigator();

type Props = {

}

export default function Screens() {

    return (
        <PaperProvider theme={CustomDefaultTheme} >
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name={"HomeScreen"} component={HomeScreen} />
                    <Tab.Screen name={"SettingsScreen"} component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
