
/**
 * Created by jin on 17-1-12.
 */
'use strict'

import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native'

import stylesBase from '../styles/stylesBase'
import stylesMovieList from '../styles/stylesMovieList'

export default class MovieList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            movies: [],
            loaded:false,
            count:20,
            start:0,
            total:0
        }

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        }),
        this.REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
        this.fetchData();
    }
    requestUrl(
        url = this.REQUEST_URL,
        count = this.state.count,
        start = this.state.start,
    ){
        return (`${url}?count=${count}&start=${start}`)
    }
    fetchData(){
        fetch(this.requestUrl())
            .then(response => response.json())
            .then(responseData => {
                let newStart = responseData.start + responseData.count;
                this.setState({
                    movies:responseData.subjects,
                    loaded:true,
                    total: responseData.total,
                    start: newStart,
                })
            })
            .done();
    }
    loadMore = () => {
        fetch(this.requestUrl())
            .then(res => res.json())
            .then(responseData => {
                let newStart = responseData.start+ responseData.count
                this.setState({
                    movies:[...this.state.movies,...responseData.subjects],
                    start:newStart,
                })
            })
            .done()
    }

    onEndReached = () => {
        console.log(`到底了！开始：${this.state.start}，总共：${this.state.total}`)
        if(this.state.total>this.state.start){
            this.loadMore()
        }
    }
    renderMovieList =(movie) =>{

        return (
            <TouchableHighlight
                underlayColor='rgba(34,26,38,0.1)'
                onPress={()=> {
                    console.log(`《${movie.title}》被点了！`)
                }}
            >
                <View style={stylesMovieList.item}>
                    <View style={stylesMovieList.itemImage}>
                        <Image style={stylesMovieList.image}
                               source={{uri:movie.images.large}}/>
                    </View>
                    <View style={stylesMovieList.itemContent}>
                        <Text style={stylesMovieList.itemHeader}>{movie.title}</Text>
                        <Text style={stylesMovieList.itemMeta}>{movie.original_title} ({movie.year})</Text>
                        <Text style={stylesMovieList.redText}>{movie.rating.average}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    renderFooter = () => {
        if (this.state.total > this.state.start) {
            return (
                <View
                    style={{marginVertical:10,alignSelf:'center'}}
                >
                    <ActivityIndicator
                        color='#6435c9'
                    />
                </View>
            )
        } else {
            return (
                <View
                    style={{marginVertical:10,alignSelf:'center'}}
                >
                    <Text style={{color:'rgba(0,0,0,0.3)'}}>没有可显示内容了QAQ</Text>
                </View>
            )
        }
    }

    render() {
        if(!this.state.loaded){
            return(
                <View style={stylesBase.container}>
                    <View style={stylesBase.loading}>
                        <ActivityIndicator size={'large'} color={'#6435c9'}/>
                        <Text>加载中...</Text>
                    </View>
                </View>
            );
        }
        return (
            <View style={stylesBase.container}>
                <ListView
                    pageSize={this.state.count}
                    initialListSize={this.state.count}
                    dataSource={this.dataSource.cloneWithRows(this.state.movies)}
                    renderRow={this.renderMovieList}
                    renderFooter={this.renderFooter}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={30}
                />
                <Text style={{fontSize: 8}}>已加载：{this.state.start}, 总共：{this.state.total}</Text>
            </View>
        )
    }
}
