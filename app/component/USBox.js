/**
 * Created by jin on 17-1-25.
 */
import React,{Component} from 'react'
import {
    Text,
    View
} from 'react-native'
import USBoxList from './USBoxList'
import CommonNav from './CommonNav'

import MovieDetail from './MovieDetail'

export default class USBox extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <CommonNav
                    title={'北美票房'}
                />
                <USBoxList pushToDetail={this.pushToDetail}/>
            </View>
        )
    }


    pushToDetail = (movie) => {
        this.props.navigator.push({
            title: movie.title,
            component: MovieDetail,
            passProps: {
                movie: movie
            }
        })
    }
}