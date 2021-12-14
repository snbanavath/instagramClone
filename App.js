/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
import InstagramLogo from './src/Icons/InstagramLogo';
import AddPostIcon from './src/Icons/AddPostIcon';
import HeartIcon from './src/Icons/HeartIcon';
import MessageIcon from './src/Icons/Messenger';
import SaveIcon from './src/Icons/SaveIcon';
import StoryUpdate from './src/Components/StoryUpdate/StoryUpdate';
import Post from './src/Components/Posts/Post';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

  

export default function InstagramClone(){
  return(
    <>
      <View style={styles.headerContainer}>
        <InstagramLogo style={styles.instagramLogo} />
        <View style={styles.headerIconsContainer}>
          <AddPostIcon height={30} width={25} style={{marginRight: 25}} />
          
          <Image source={require('./src/Images/messageIcon.png')} style={{height: 30, width: 30,}}/>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator ={false}>
        <ScrollView horizontal={true} style={{flexGrow: 0, flexShrink: 0,}} showsHorizontalScrollIndicator={false}>
          <View style={styles.storiesContainer}>
            <View style={styles.storyItem}>
              <ImageBackground source={require('./src/Images/baby.jpg')} imageStyle={{ borderRadius: 50}} resizeMode="cover" style={styles.myStory}>
                {/* <Text style={styles.text}>Inside</Text> */}
                <AddPostIcon fill={'#3d8eff'} stroke={'white'} height={20} width={20} />
              </ImageBackground>
              <Text style={{color: '#141414', fontSize: 14,}}>Your Story</Text>
            </View>
            <StoryUpdate content={'Sunny'} imageUri={require('./src/Images/boy-3.png')}/>
            <StoryUpdate content={'Katie'} imageUri={require('./src/Images/boy-5.jpg')}/>
            <StoryUpdate content={'Barbie'} imageUri={require('./src/Images/boy-1.jpg')}/>
            <StoryUpdate content={'Scarlett'} imageUri={require('./src/Images/boy-2.jpg')}/>
            <StoryUpdate content={'Ariana'} imageUri={require('./src/Images/boy-3.png')}/>
            
          </View>
        </ScrollView>
      
        <Post title={"Sunil Naik"} profileUri={require('./src/Images/boy-1.jpg')} postUri={require('./src/Images/boy-1.jpg')} />
        <Post title={"Elon Musk"} profileUri={require('./src/Images/boy-5.jpg')} postUri={require('./src/Images/boy-5.jpg')} />
        <Post title={"Shang chi"} profileUri={require('./src/Images/boy-2.jpg')} postUri={require('./src/Images/boy-2.jpg')} />
        <Post title={"Sunil Naik"} profileUri={require('./src/Images/boy-3.png')} postUri={require('./src/Images/boy-3.png')} />
      </ScrollView>
      <View style={styles.bottomTabContainer}>
        <Image source={require('./src/Images/home.png')} style={{height: 25, width: 25, marginLeft: 10}} />
        <Image source={require('./src/Images/search.png')} style={{height: 25, width: 25, marginLeft: 10}} />
        <Image source={require('./src/Images/video.png')} style={{height: 25, width: 25, marginLeft: 10}} />
        <HeartIcon height={25} width={25} />
        <Image source={require('./src/Images/user.png')} style={{height: 25, width: 25, marginLeft: 10}} />

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
  },
  headerIconsContainer: {
    flexDirection: 'row'
  },
  storiesContainer: {
    flexDirection: 'row',
    height: 90,
    width: '100%',
    paddingHorizontal: 20,
    margin: 0,
  },
  myStory: {
    height: 65,
    width: 65,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  bottomTabContainer: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: "#e8e8e8",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  }
});

