import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link,IndexRoute} from 'react-router-dom';
import Bundle from "./Bundle";
import Home from 'bundle-loader?lazy&name=home!Home/Home';
import Page from 'bundle-loader?lazy&name=page1!page1/page1';
import Counter from "bundle-loader?lazy&name=counter!counter/Counter"
const Loading = function(){
    return <div>Loading</div>
}

const createComponent =  (component)=>(props)=>(
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
)
const getRouter = ()=>(
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
            <Switch>
                <Route  path="/home" component={createComponent(Home)}/>
                <Route path="/page1" component={createComponent(Page)}/>
                <Route path="/counter" component={createComponent(Counter)}/>
            </Switch>
        </div>
    </Router>
)
export default  getRouter
