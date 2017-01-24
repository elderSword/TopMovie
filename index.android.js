/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
    Navigator,
  View,
} from 'react-native';

import TabNaVigator from 'react-native-tab-navigator'
import Featured from './app/component/Featured'
import icons from './app/assets/icons'

import MovieList from './app/component/MovieList'
import stylesBase from './app/styles/stylesBase'
class TopMovie extends Component {
  state={
    selectTab:'featured'
  }

  render() {
    return (
        // <TabNaVigator tabBarStyle={{backgroundColor:'#6435c9'}}>
        //   <TabNaVigator.Item
        //     title={'推荐电影'}
        //     renderIcon={() => <Image source={{uri:icons.star}} style={stylesBase.iconStyle}/>}
        //     renderSelectedIcon={() => <Image source={{uri:icons.starActive}} style={stylesBase.iconStyle}/>}
        //     onPress={()=>{this.setState({selectTab:'featured'})}}
        //     selected={this.state.selectTab==='featured'}
        //     selectedTitleStyle={styles.selectedTitleStyle}
        //     >
        //     <Navigator
        //         initialRoute={{name:'推荐电影',component:Featured}}
        //         configureScene={() => {
        //           return Navigator.SceneConfigs.PushFromRight;
        //         }}
        //         renderScene={(route,navigator) => {
        //           let Component = route.component;
        //           return <Component {...route.passProps} navigator={navigator}/>
        //         }}/>
        //   </TabNaVigator.Item>
        // </TabNaVigator>
      <View style={{flex:1}}>
        <Featured/>
      </View>
    );
  }
}



AppRegistry.registerComponent('TopMovie', () => TopMovie);
