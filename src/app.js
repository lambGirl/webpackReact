import React,{Component}  from 'react';
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Provider} from 'react-redux';
import store from './pages/redux/store';
import getRouter from "./pages/router/router";

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}


function renderWithHotReload(RootElement){
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('root'))
}
