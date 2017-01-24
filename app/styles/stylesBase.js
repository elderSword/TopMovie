/**
 * Created by jin on 17-1-12.
 */
'use strict';
import React,{Component} from 'react'
import {
    StyleSheet
} from 'react-native'

let stylesBase = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ededed',
    },
    loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    iconStyle:{
        width:25,
        height:25,
    },
    selectedTitleStyle:{
        color:'white'
    }
});

export { stylesBase as default};