import React from "react";
import Map from "./Map";

const Main = ({ match }) => {
    const { narrative_id, event_id } = match.params;
    return (
        <main className="container-fluid p-0 mt-4">
            {(!narrative_id || !event_id) && (
                <div className="row">
                    <p className="col-sm-10 col-md-8 text-align-left">
                        Smart Heritage brings the history of Hastings' America Ground and
                        Trinity Triangle to life online through art & heritage projects
                    </p>
                </div>
            )}
            <Map narrative_id={narrative_id} event_id={event_id} />

            {(!narrative_id || !event_id) && (
                <div className="row">
                    <p className="col-sm-10 col-md-8 text-align-left">
                        <a href="http://www.mslprojects.co.uk/this-is-for-everyone">
                            <b>This Is For Everyone</b>
                        </a>{" "} Three digital art and storytelling projects test out ways to bring the town streets to life. Work by Rosanna Lowe, Judith Ricketts and Kevin Grist.
                    </p>
                    <p className="col-sm-10 col-md-8 text-align-left">
                        <a href="http://www.mslprojects.co.uk/our-past-our-future-developing-historical-sources-for-creative-inspiration/">
                            <b>Our Past, Our Future</b>
                        </a>{" "}
                        Fifteen fascinating historical stories brought to life by our history and creative writing group, delivered via YouTube
                    </p>
                    <p className="col-sm-10 col-md-8 text-align-left">
                        <b>A Derelict Chorale</b>{" "}
                        Punk folk musician Chris Thorpe-Tracey created A Derelict Chorale, 10 powerful songs about the rebellious 1800s in Hastings when many were evicted from the America Ground.
                    </p>
                    <p className="col-sm-10 col-md-8 text-align-left">
                        <b>Dot Dash Salons</b>{" "}
                        Welcome to the Dot Dash virtual festival: eight one-hour Zoom Salons explore the fascinating history and present-day challenges for Hastings’ America Ground.
                    </p>
                    <p className="col-sm-10 col-md-8 text-align-left">
                        <b>Rock On, Rock Fair: a Motley Musical of Raggle-Taggle Folkery with Curious Characters, Rollicking Rides and Heart-breaking, Soul-shaking Songs</b>
                        {" "} Rosanna Lowe, writer, and researcher, Julie Gidlow, created Rock On, Rock Fair, an exploration in words and song of the historic Rock Fairs that took place over centuries in the Trinity Triangle.
                    </p>
                    <p className="col-sm-10 col-md-8 text-align-left">
                        Development of the Smart Heritage pilot map was funded
                        by <a href="https://www.thersa.org/">RSA</a> and the map
                        was build by{" "}
                        <a href="https://drjonnicholson.com">Jon Nicholson</a>
                    </p>
                    <p className="col-sm-10 col-md-8 text-align-left">
                        Engage with us on Twitter{" "}
                        <a href="https://twitter.com/MSLHastings">
                            @MSLHastings
                        </a>{" "}
                        and Instagram{" "}
                        <a href="https://www.instagram.com/msldigital/">
                            @msldigital
                        </a>
                        . We'd love to hear about your experience!
                    </p>
                </div>
            )}
        </main>
    );
};

export default Main;
