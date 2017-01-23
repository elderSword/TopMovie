/**
 * Created by jin on 17-1-23.
 */
import React,{ Component, PropTypes } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native'
const {height, width} = Dimensions.get('window')
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
            <View style={}>
                {
                    this.props.canBack
                    ?
                    <View sytle={}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.props.doSomething}>
                            <Text style={styles.backTitleStyle}>返回</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
                <Text style = {}
            </View>
        )
    }

}