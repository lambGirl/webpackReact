/**
 * 此页面用于页面按需加载
 */
import React,{Component} from "react";
class Bundle extends Component{
    constructor(props){
        super(props);
        this.state = {
            mod:null,
        }
    }

    load(props){
        this.setState({
            mod: null
        });
        props.load((mod)=>{
            this.setState({
                mod: mod.default?mod.default:mod
            })
        })
    }
    componentWillMount() {
        this.load(this.props)
    }

    render(){
        return this.props.children(this.state.mod);
    }
}

export default  Bundle;