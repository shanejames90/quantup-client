import React, { Fragment } from 'react'
// import React from 'react'

import Clock from './components/Clock/Clock'
import Layout from './components/Layout/Layout'
import Quote from './components/Quote/Quote'
import Weather from './components/Weather/Weather'

const App = () => (
  <Fragment>
    <Layout />
    <Weather />
    <Clock />
    <Quote />
  </Fragment>
)

export default App
