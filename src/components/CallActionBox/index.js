import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CallActionBox = () => {
    const onReverseCamera = () => {

    }
    const onToggleCamera = () => {

    }
    const onToggleMicrophone = () => {

    }
    const onHangup = () => {

    }

    return (
        <View style={styles.bottonsContainer}>
            <Pressable onPress={onReverseCamera} style={styles.iconButton}>
                <Ionicons name="ios-camera-reverse" size={30} color={'white'} />
            </Pressable>
            <Pressable onPress={onToggleCamera} style={styles.iconButton}>
                <MaterialIcons name="video-off" size={30} color={'white'} />
            </Pressable>
            <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
                <MaterialIcons name="microphone-off" size={30} color={'white'} />
            </Pressable>
            <Pressable onPress={onHangup} style={[styles.iconButton, { backgroundColor: 'red' }]}>
                <MaterialIcons name="phone-hangup" size={30} color={'white'} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    bottonsContainer: {
        backgroundColor: '#333333',
        padding: 20,
        paddingBottom: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'
    },
    iconButton: {
        backgroundColor: '#4a4a4a',
        padding: 15,
        borderRadius: 50
    }
});
export default CallActionBox