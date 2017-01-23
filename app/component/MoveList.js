import React,{Component} from 'react'
import {
    Text,
    Image,
    ListView,
    View,

} from 'react-native'

export default class MovieList extends Component{
    constructor(props){
        super(props);
        let movies =[
            {title:'肖申克的救赎'},
            {title:'这个杀手不太冷'},
            {title:'阿甘正传'},
            {title:'霸王别姬'},
            {title:'美丽人生'},
        ];
        let dataSource = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2
        });

        this.state = {
            movies: dataSource.cloneWithRows(movies)
        }
    }
    render(){
        return(
            <View style={{flex:1,paddingTop:22}}>
                <ListView
                    dataSource={this.state.movies}
                    renderRow={
                    (movie) => <Text>{movie.title}</Text>
                }/>
            </View>
        );
    }
}
