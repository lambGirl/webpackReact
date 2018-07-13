import React,{Component} from 'react';
import {increment, decrement, reset} from "../redux/actions/counter";
import {connect} from 'react-redux';
class Counter extends Component{
    render(){
        return <div>
            <div>当前计数为{this.props.counter.count}</div>
            <button onClick={this.props.increment()}>
                自增
            </button>

            <button onClick={this.props.decrement()}>
                自减
            </button>
            <button onClick={this.props.reset()}>
                重置
            </button>
        </div>
    }
}

/**
 * 往组件中插入props,在props中去设置state
 */
const mapStateToProps = (state)=>{
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        increment: ()=>{
            dispatch(increment());
        },
        decrement: ()=>{
            dispatch(decrement());
        },
        reset: ()=>{
            dispatch(reset());
        }
    }
};
/**
 * 注入state, action
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

