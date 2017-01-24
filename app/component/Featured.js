/**
 * Created by jin on 17-1-24.
 */
import React,{Component} from 'react'
import {
    Text,
    View
} from 'react-native'

import MovieList from './MovieList'
import CommonNav from './CommonNav'
export default class Featured extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <CommonNav
                    title={'推荐电影'}
                />
                <MovieList pushToDetail={this.pushToDetail}/>
            </View>
        )
    }
}

pushToDetail= (movie) => {
    this.props.navigator.push({
     title:movie.title,
        component:MovieDetail,
        passProps:{
            movie:movie
     }
    })
}