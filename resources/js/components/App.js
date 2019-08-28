import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Map from './Map'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <main className="container-fluid">
                    <Map />
                </main>
                <Footer />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
