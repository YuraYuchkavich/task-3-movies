import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
//import Provider from 'application/Provider'
import Root from '../application/root'
import App from '../components/Button/Button'
import { GlobalStyles } from './GlobalStyles.js'

ReactDOM.render(
  (
    <Fragment>
       <GlobalStyles />
       <Root />
    </Fragment>
  ),
  document.getElementById('root')
)
