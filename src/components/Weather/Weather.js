import React, { Component, Fragment } from 'react'
import axios from 'axios'

import apiUrl from './../../apiConfig'

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Weather extends Component {
  constructor (props) {
    super(props)

    this.state = {
      zip: '',
      icon: null,
      weather: null,
      city: null,
      description: null
    }
  }

  handleInputChange = (event) => {
    event.persist()
    this.setState({ zip: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.get(`${apiUrl}${this.state.zip}`)
      // .then(res => console.log(res.data.list[0].weather[0].icon))
      .then(res => this.setState({ icon: res.data.list[0].weather[0].icon, weather: res.data.list[0].main.temp, city: res.data.city.name, description: res.data.list[0].weather[0].description }))
      .catch(console.error)
  }

  render () {
    let weatherDisplay
    const { weather, city, description } = this.state
    if (!weather && !city && !description) {
      weatherDisplay = ''
    } else {
      weatherDisplay = (
        <Fragment>
          <Card style={{ width: '18rem', border: 'none', marginLeft: '', marginTop: '3px', background: 'rgb(0,0,0,0.3)' }}>
            <Card.Body>
              <Card.Text>
                <span style={{ color: '#DEF2F1', fontWeight: 'bold', fontSize: '20px' }}>{city} is {weather}°F</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Fragment>
      )
    }

    return (
      <div className="centerWeather">
        <div className="row">
          <div className="col-sm-10 col-md-8 mt-5 mx-2">
            <Form.Group controlId="zip" style={{ width: '18rem', border: 'none', marginLeft: '50%', marginRight: '50%' }}>
              <Form onSubmit={this.handleSubmit} inline="true">
                <FormControl
                  type="text"
                  className="mr-sm-2"
                  required
                  name="zip"
                  value={this.state.zip}
                  placeholder="Enter zip code"
                  onChange={this.handleInputChange}
                />
                <Button type="submit" variant="outline-primary" inline="true" required>Search</Button>{weatherDisplay}
              </Form>
            </Form.Group>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather
