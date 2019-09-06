import React from 'react'
import Map from './Map'

const Main = ({ match }) => {
    const { narrative_id, event_id } = match.params
    return (
        <main className='container-fluid my-2'>
            {(!narrative_id || !event_id) && (
                <div>
                    <p>
                        In 2012, Tim Berners-Lee famously tweeted "This Is For Everyone", in a moment of technological optimism many think is lost to us. MSL want to build on Berners-Lee's big moment by exploring how small-town WiFi could re-open urban channels to the massive variety of audiences found on city streets.
                    </p>
                    <p>
                        MSL invites you to explore the America Ground and experience the experimental work by three local and regional artists Judith Ricketts (air time), Kevin Grist (Beneath Water) and Rosanna Lowe (Ordinary Extraordinary). Use the map below to view the works.
                    </p>
                    <p>
                        Engage with us on Twitter <a href='https://twitter.com/MSLHastings'>@MSLHastings</a> and Instagram <a href='https://www.instagram.com/msldigital/'>@msldigital</a>. We'd love to hear about your experience!
                    </p>
                    <p>
                        <a href='http://www.mslprojects.co.uk/this-is-for-everyone'>#ThisIsForEveryone</a>{' '}
                        <a href='http://www.mslprojects.co.uk/is-this-for-everyone'>#IsThisIsForEveryone?</a>
                    </p>
                </div>
            )}
            <Map narrative_id={narrative_id} event_id={event_id} />
        </main>
    )
}

export default Main
