import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import CookieConsent from "react-cookie-consent";
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import { GA_TRACKING_ID } from '../variables'

class App extends Component {
    componentDidMount() {
        ReactGA.initialize(GA_TRACKING_ID, {
            // debug: true,
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
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/narrative/:narrative_id/event/:event_id' component={Main} />
                </Switch>
                <Footer />
                <CookieConsent
                    location='bottom'
                    buttonText='I Understand'
                    cookieName='smart_heritage_consent'
                    acceptOnScroll={true}
                    contentStyle={{ flex: '1 0 300px', margin: '10px' }}
                    disableButtonStyles={true}
                    buttonClasses='btn btn-primary mx-auto mt-1 mb-3'
                    expires={150}
                // debug={true}
                >
                    This website uses <a href='http://www.aboutcookies.org.uk/'>cookies</a> to enhance the user experience and understand your interactions with the artists' work. No personal information is recorded.
                </CookieConsent>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
