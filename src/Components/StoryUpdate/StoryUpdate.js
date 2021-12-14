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

export default function StoryUpdate(props){
    return(
        <View style={styles.storyContainer}>
            <Image source={props.imageUri} style={styles.storyImage}/>
            <Text style={{color: '#141414', fontSize: 14,}}>{props.content}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    storyContainer: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor:  '#e5233b',
        padding: 2,
        alignItems: 'center',
        marginRight: 20,
    },
    storyImage: {
        height: '100%',
        width: '100%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white'
    }
    
  });