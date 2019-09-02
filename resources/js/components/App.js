import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import CookieConsent from "react-cookie-consent";
import Footer from './Footer'
import Header from './Header'
import Map from './Map'
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
                <main className='container-fluid my-2'>
                    <p>
                        Explore the America Ground as you experience the experimental work by three local and regional artists Judith Ricketts, Kevin Grist and Rosanna Lowe. Use the map below to view the works.
                    </p>
                    <p>
                        Engage with us on Twitter <a href='https://twitter.com/MSLHastings'>@MSLHastings</a> and Instagram<a href='https://www.instagram.com/msldigital/'>@msldigital</a>.
                    </p>
                    <p>
                        <a href='http://www.mslprojects.co.uk/this-is-for-everyone'>#ThisIsForEveryone</a>{' '}
                        <a href='http://www.mslprojects.co.uk/is-this-for-everyone'>#IsThisIsForEveryone?</a>
                    </p>
                    <Map />
                </main>
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
