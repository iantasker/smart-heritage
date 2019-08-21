
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import GeoLocated from './GeoLocated'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <GeoLocated/>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
