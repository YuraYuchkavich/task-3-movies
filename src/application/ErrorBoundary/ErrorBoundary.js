import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends PureComponent {

  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidCatch (error) {
    console.error(error)
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
