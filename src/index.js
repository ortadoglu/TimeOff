import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

/** Store */
import createStore from './store'

/** Routing */
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

/** Pages */
import { TodosPage, RequestPage, LoginPage } from 'pages'

document.startApp = function (container) {
  const store = createStore()
  const history = syncHistoryWithStore(hashHistory, store)

  injectTapEventPlugin()

  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={TodosPage} />
          <Route path='/request' component={RequestPage} />
          <Route path='/login' component={LoginPage} />
        </Router>
      </Provider>
    </MuiThemeProvider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
