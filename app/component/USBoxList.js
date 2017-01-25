/**
 * Created by jin on 17-1-25.
 */
import React,{Component,PropTypes} from 'react'
import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native'
import stylesBase from '../styles/stylesBase'
import stylesMovieList from '../styles/stylesMovieList'

const REQUEST_URL = 'https://api.douban.com/v2/movie/in_theaters'

export default class USBoxList extends Component{
    static propTypes ={
        pushToDetail:PropTypes.func
    }
    static  defaultProps ={}

    constructor(props){
        super(props)

        this.state ={
            movies:new ListView.DataSource({
                rowHasChanged:(r1,r2) => {
                    r1!==r2
                }
            }),
            loaded:false
        }
        this.fetchData()
    }

    fetchData(){
        fetch(REQUEST_URL)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movies: this.state.movies.cloneWithRows(response.subjects),
                    loaded:true
                })
            })
            .done()

    }
    render(){
        return(
            !this.state.loaded
            ?
            <View style={stylesBase.container}>
                <View style={stylesBase.loading}>
                    <ActivityIndicator size={'large'} color={'#6435c9'}/>
                </View>
            </View>
            :
            <View style={stylesBase.container}>
                <ListView dataSource={this.state.movies} renderRow={this.renderMovieList.bind(this)}
                />
            </View>
        )
    }

    showMovieDetail(movie){
        this.props.pushToDetail(movie)
    }

    renderMovieList (movie){
        return (
            <TouchableHighlight
                underlayColor={'rgba(34,26,38,0.1)'} onPress={() => {
                  this.showMovieDetail(movie)
                }}
            >
                <View style={stylesMovieList.item}>
                    <View style={stylesMovieList.itemImage}>
                        <Image source={{uri:movie.images.large}} style={stylesMovieList.image}/>
                    </View>
                    <View style={stylesMovieList.itemContent}>
                        <Text style={stylesMovieList.itemHeader}>{movie.title}</Text>
                        <Text style={stylesMovieList.itemMeta}>
                            {movie.original_title}({movie.year})
                        </Text>
                        <Text style={stylesMovieList.redText}>{movie.rating.average}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}