import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import Alert from './Alert'
import Footer from './Footer'
import Header from './Header'
import Map from './Map'
import { GA_TRACKING_ID } from '../variables'

class App extends Component {
    componentDidMount() {
        ReactGA.initialize(GA_TRACKING_ID, {
            debug: true,
            gaOptions: {
                siteSpeedSampleRate: 100
            }
        })
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <main className="container-fluid">
                    <Alert>
                        <p>This site requests your location to enhance your experience. You may chose not to share your location. Your location is not stored.</p>
                        <p>We use Google Analytics, which uses cookies (small text files), to record your interactions with the artists' work. No personal information is recorded.</p>
                        <p>By using this site you agree to the above.</p>
                    </Alert>
                    <p>
                        Introduction text
                    </p>
                    <Map />
                </main>
                <Footer />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
