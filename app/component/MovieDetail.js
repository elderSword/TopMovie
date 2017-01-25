/**
 * Created by jin on 17-1-25.
 */
import React,{Component,PropTypes} from 'react'
import {
    Text,
    View,
    ActivityIndicator,
    Navigator
} from 'react-native'

import CommonNav from './CommonNav'
import stylesBase from '../styles/stylesBase'
import stylesMovieList from '../styles/stylesMovieList'

export default class MovieDetail extends Component{
    static propTypes={
        movie:PropTypes.object
    }

    static defaultProps={}

    constructor(props){
        super(props)
        this.state = {
            movieDetail:'',
            loaded:false,
        }

        const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${this.props.movie.id}`

        this.fetchData(REQUEST_URL)
    }

    fetchData(REQUEST_URL){
        fetch(REQUEST_URL)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movieDetail:response,
                    loaded:true,
                })
            })
            .done()
    }

    render(){

            let movie = this.state.movieDetail

        let summary;
            if((typeof movie.summary) === 'string'){
                summary = movie.summary.split(/\n/).map((p,i) =>{
                    return(
                        <View key={i} style={{marginBottom:15,paddingLeft: 6,paddingRight: 6}}>
                            <Text style={stylesMovieList.itemDetailText}>{p}</Text>
                        </View>
                    )
                })
            }
        return(
            <View style={stylesBase.container}>
                <CommonNav
                    title={this.props.movie.title}
                    doSomething={this.popToFeatured}
                    canBack={true}
                />
                {
                    !this.state.loaded
                    ?
                    <View style={stylesBase.loading}>
                        <ActivityIndicator size={'large'} color={'#6435c9'}/>
                    </View>
                    :
                    <View style={stylesMovieList.itemDetail}>
                        {summary}
                    </View>
                }
            </View>

        )
    }
    popToFeatured =() => {
        this.props.navigator.pop();
    }
}
