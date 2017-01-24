/**
 * Created by jin on 17-1-23.
 */
import React,{ Component, PropTypes } from 'react'
import {
    Text,
    View,
    TouchableOpacity,

} from 'react-native'
import styleNav from '../styles/nav'

export default class CommonNav extends Component{
    static propTypes ={
        title:PropTypes.string,
        doSomething:null,
        canBack:file
    }
    static defaultProps ={
        title:'',
        doSomething:null,
        canBack:false
    }

    render(){
        return(
            <View style={styleNav.container}>
                {
                    this.props.canBack
                    ?
                    <View sytle={styleNav.backStyle}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.props.doSomething}>
                            <Text style={styleNav.backTitleStyle}>返回</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
                <Text style = {styleNav.titleStyle}>{this.props.title}</Text>
            </View>
        )
    }

}