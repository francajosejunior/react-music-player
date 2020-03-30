import React from 'react'
import './styles.scss'

class ErrorHandler extends React.Component {
  state = {
    error: null,
    errorInfo: null
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div className="app-error-handler">
          <h2>Erro ao renderizar aplicação</h2>
          <br />
          <p>{this.state.error?.toString() || ''}</p>
          <br />
          <pre>{this.state.errorInfo?.componentStack || ''}</pre>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorHandler
