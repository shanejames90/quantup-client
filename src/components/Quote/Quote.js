import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

const config = {
  apiUrl: 'https://quotes.rest/qod'
}

class Quote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: null,
      author: null
    }
  }

  componentDidMount () {
    axios.get(config.apiUrl)
      // .then(res => console.log(res.data.contents.quotes[0].quote))
      .then(res => this.setState({ quote: res.data.contents.quotes[0].quote, author: res.data.contents.quotes[0].author }))
      .catch(console.error)
  }

  render () {
    const { quote, author } = this.state
    return (
      <Fragment>
        <Card style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0.05)', marginTop: '25%', marginBottom: '35%', position: 'fixed', fontSize: '12px' }}>
          <Card.Body>
            <Card.Text>
              <p style={{ fontSize: '13px', fontStyle: 'bold', letterSpacing: '-1px', color: '#17252A' }}>&quot;{quote}&quot; - {author}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Fragment>
    )
  }
}

export default Quote
