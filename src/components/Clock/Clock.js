import React, { Component, Fragment } from 'react'
import moment from 'moment'
import Card from 'react-bootstrap/Card'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: moment().format('h:mma')
    }
  }

  render () {
    const { time } = this.state
    return (
      <Fragment>
        <Card style={{ border: 'none', background: 'transparent', marginLeft: '30%', marginRight: '33%', marginTop: '10%' }}>
          <Card.Body>
            <Card.Text>
              <p style={{ fontSize: '130px', fontStyle: 'bold', letterSpacing: '-5px', color: '#DEF2F1' }}>{time}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Fragment>
    )
  }
}

export default Clock
