/**
 * Created by jin on 17-1-24.
 */
import React from 'react'
import {
    StyleSheet,
    Dimensions
} from 'react-native'
const {height, width} = Dimensions.get('window')
let styleNav = StyleSheet.create({
    container:{
        width:width,
        height:45,
        backgroundColor:'#6435c9',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    backStyle:{
        position:'absolute',
        bottom:14,
        left:14
    },
    titleStyle:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff'

    },
    backTitleStyle:{
        fontSize:14,
        color:'#fff'
    }
})

export {styleNav as default};