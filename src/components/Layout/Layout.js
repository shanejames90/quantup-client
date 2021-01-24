import React, { Component } from 'react'
import axios from 'axios'

const config = {
  apiUrl: 'https://api.unsplash.com/photos/random/?client_id=BUocmYhREnEoREknyuEUyVHLhFPV10wGQ6xSTuoQ4M8&auto=format&query=nature'
}

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      background: null
    }
  }

  componentDidMount () {
    axios.get(config.apiUrl)
      // .then(res => console.log(res.data.urls.regular))
      .then(res => this.setState({ background: res.data.urls.regular }))
      .catch(console.error)
  }

  render () {
    const { background } = this.state
    return (
      <img src={background} style={{ position: 'fixed', width: '100vw', height: '100vh' }}/>
    )
  }
}

export default Layout
