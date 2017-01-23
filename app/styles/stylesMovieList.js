/**
 * Created by jin on 17-1-12.
 */
'use strict';

import React,{Component} from 'react'
import {
    StyleSheet
} from 'react-native'

let stylesMovieList = StyleSheet.create({
    item:{
        flexDirection:'row',
        flex:1,
        borderBottomWidth:1,
        paddingBottom:6,
        paddingTop:6,
        borderColor:'rgba(100,53,201,0.1)'
    },
    itemImage:{
        flex:1,
        width:90,
        height:140
    },
    image:{
        width:90,
        height:130,
        margin:5,
        marginLeft:30
    },
    itemContent:{
        flex:1,
        marginTop:6
    },
    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#6435c9',
        marginBottom:6
    },
    itemMeta:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        marginBottom:6,
    },
    redText:{
        flex:1,
        color:'#db3838',
        fontSize:15
    },

})
export {stylesMovieList as default}