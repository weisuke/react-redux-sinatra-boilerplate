import 'babel-core/polyfill'
import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import store from './stores/main-store';
import renderRoutes from './routes/main-routes';

export default class Root extends React.Component {
    getRootChildren (store, routes) {
        const rootChildren = [
            <Provider key="provider" store={store}>
                {routes}
            </Provider>
        ]

        if (__DEVTOOL__) {
            const { DevTools, DebugPanel, LogMonitor } =
                require('redux-devtools/lib/react')
            rootChildren.push(
                <DebugPanel key="debug-panel" top right bottom>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
            )
        }
        return rootChildren
    }

    render () {
        return (
            <div>{this.getRootChildren(store, renderRoutes(this.props.history))}</div>
        )
    }
}

ReactDom.render((
    <Root history={createBrowserHistory()} />
), document.getElementById('main-app'))
