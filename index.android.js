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

import TabNavigator from 'react-native-tab-navigator'
import Featured from './app/component/Featured'
import USBox from './app/component/USBox'
import icons from './app/assets/icons'

import stylesBase from './app/styles/stylesBase'
class TopMovie extends Component {
  state={
    selectTab:'featured'
  }

  render() {
    return (
        <TabNavigator tabBarStyle={{backgroundColor:'#6435c9'}}>
          <TabNavigator.Item
            title={'推荐电影'}
            renderIcon={() => <Image source={{uri:icons.star}} style={stylesBase.iconStyle}/>}
            renderSelectedIcon={() => <Image source={{uri:icons.starActive}} style={stylesBase.iconStyle}/>}
            onPress={()=>{this.setState({selectTab:'featured'})}}
            selected={this.state.selectTab==='featured'}
            selectedTitleStyle={stylesBase.selectedTitleStyle}
            >
            <Navigator
                initialRoute={{name:'推荐电影',component:Featured}}
                configureScene={() => {
                  return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator) => {
                  let Component = route.component;
                  return <Component {...route.passProps} navigator={navigator}/>
                }}/>
          </TabNavigator.Item>

          <TabNavigator.Item
            title={'北美票房'}
            renderIcon={() => <Image source={{uri:icons.board}} style={stylesBase.iconStyle}/>}
            renderSelectedIcon={() => <Image source={{uri:icons.boardActive}} style={stylesBase.iconStyle}/>}
            onPress={() => {this.setState({selectTab:'usbox'})}}
            selected={this.state.selectTab === 'usbox'}
            selectedTitleStyle={stylesBase.selectedTitleStyle}
          >
            <Navigator
              initialRoute={{name:'北美票房',component:USBox}}
              configureScene={() =>{
                return Navigator.SceneConfigs.PushFromRight
              }}
              renderScene={(route,navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator}/>
              }}
            />
          </TabNavigator.Item>


        </TabNavigator>
    );
  }
}



AppRegistry.registerComponent('TopMovie', () => TopMovie);
