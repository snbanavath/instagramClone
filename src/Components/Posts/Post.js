import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import MenuIcon from '../../Icons/MenuIcon'
import HeartIcon from '../../Icons/HeartIcon';
import SendIcon from '../../Icons/SendIcon';

export default function Post(props){
    return(
        <View style={{width: '100%'}}>
            <View style={styles.postHeader}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={props.profileUri} style={styles.postHeaderImage} />
                    <Text style={styles.postUserName}>{props.title}</Text>
                </View>
                <Image source={require('../../Images/option.png')} style={styles.optionIcon} />
            </View>
            <Image source={props.postUri} style={styles.postContent} />
            <View style={styles.actionTabContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <HeartIcon height={25} width={25} />
                    <Image source={require('../../Images/bubble-chat.png')} style={{height: 25, width: 25, marginLeft: 10}} />
                    <Image source={require('../../Images/send.png')} style={{height: 25, width: 25, marginLeft: 10}} />
                    
                </View>
                <Image source={require('../../Images/bookmark.png')} style={{height: 28, width: 28, marginLeft: 10}} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',paddingHorizontal: 10, paddingVertical: 5}}>
                <Image source={require('../../Images/baby.jpg')} style={{height: 20, width: 20, marginRight: 10, borderRadius: 50}} />
                <Text style={styles.likedText}>Liked by <Text style={{fontWeight: 'bold'}} >Sunil Naik</Text> and <Text style={{fontWeight: 'bold'}} >58 others</Text></Text>
            </View>
            <Text style={{fontSize: 10, marginLeft: 10, marginBottom: 10}}>48 mins ago</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        width: '100%',
        borderWidth: 1,
        borderColor: "#e8e8e8",
        paddingHorizontal: 10,
        
    },
    postHeaderImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    postUserName: {
        color: 'black',
        fontWeight: 'bold'
    },
    optionIcon: {
        height: 30,
        width: 30,
    },
    postContent: {
        height: 400,
        width: '100%',
    },
    actionTabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: "#e8e8e8",
    },
    likedText: {
        color: 'black',
        fontSize: 13,

    }
});