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
    }
});

export { stylesBase as default};