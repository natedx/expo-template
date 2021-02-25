import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";


export default function SettingsScreen () {

    return (
        <View style={styles.container}>
            <Text>
                This is the settings screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
