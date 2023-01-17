import React from "react";
import { View, Text, StyleSheet, ImageBackground ,Pressable,Alert} from 'react-native';
import bg from '../../../assets/images/ios_bg.png';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const IncomingCallScreen = () => {

    const onDecline = () => {
        Alert.alert("titkle", "decline")
    }
    const onAccept = () => {

    }

    return (
        <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
            <Text style={styles.name}>Alex</Text>
            <Text style={styles.phoneNumber}>Wechat Vedio...</Text>

            <View style={[styles.row, { marginTop: 'auto' }]}>
                <View style={styles.iconContainer}>
                    <Ionicons name="alarm" color="white" size={30}></Ionicons>
                    <Text style={styles.iconText}>Remind me</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="ios-chatbubble" color="white" size={30}></Ionicons>
                    <Text style={styles.iconText}>Message</Text>
                </View>
            </View>

            <View style={styles.row}>
                {/* Decline Button  */}
                <Pressable onPress={onDecline} style={styles.iconContainer}>
                    <View style={styles.iconButtonContainer}>
                        <AntDesign name="close" color="white" size={40}></AntDesign>
                    </View>
                    <Text style={styles.iconText}>Decline</Text>
                </Pressable>

                {/* Accept Button */}
                <Pressable onPress={onAccept} style={styles.iconContainer}>
                    <View style={[
                        styles.iconButtonContainer,
                        { backgroundColor: '#2e7bff' },
                    ]}>
                        <AntDesign name="check" color="white" size={40}></AntDesign>
                    </View>
                    <Text style={styles.iconText}>Accept</Text>
                </Pressable>

            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'white',
        marginTop: 100,
        marginBottom: 15,
    },
    phoneNumber: {
        fontSize: 25,
        color: 'white'
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        paddingBottom: 50,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    iconContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    iconText: {
        color: 'white',
        marginTop: 10,
    },
    iconButtonContainer: {
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 50,
        margin: 10,
    },
});

export default IncomingCallScreen