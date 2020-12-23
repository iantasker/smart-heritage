import React from "react";
import Map from "./Map";

const Main = ({ match }) => {
    const { narrative_id, event_id } = match.params;
    return (
        <main className="container-fluid p-0 mt-4">
            {(!narrative_id || !event_id) && (
                <div className="row">
                    <p className="col-sm-10 col-md-8 text-align-left">
                        <b>Smart Heritage</b> brings the history of Hastings'
                        America Ground and Trinity Triangle to life online
                        through art and heritage projects
                    </p>
                </div>
            )}
            <Map narrative_id={narrative_id} event_id={event_id} />

            {(!narrative_id || !event_id) && (
                <div className="row mt-3">
                    <div className="row mt-3 col-auto ml-0">
                        <img
                            src="/img/pins/1.png"
                            alt="This Is For Everyone"
                            className="img-icon col-xs-2"
                        />
                        <p className="col col-sm-10 col-md-8 text-align-left">
                            <a href="/narrative/2/event/9">
                                <b>This Is For Everyone</b>
                            </a>
                            {" - "}
                            Three digital art and storytelling projects test out
                            ways to bring the town streets to life. Work by
                            Rosanna Lowe, Judith Ricketts and Kevin Grist.
                        </p>
                    </div>
                    <div className="row mt-3 col-auto ml-0">
                        <img
                            src="/img/pins/2.png"
                            alt="Our Past, Our Future"
                            className="img-icon col-xs-2"
                        />
                        <p className="col col-sm-10 col-md-8 text-align-left">
                            <a href="/narrative/3/event/22">
                                <b>Our Past, Our Future</b>
                            </a>
                            {" - "}
                            Fifteen fascinating historical stories brought to
                            life by our history and creative writing group,
                            delivered via YouTube.
                        </p>
                    </div>
                    <div className="row mt-3 col-auto ml-0">
                        <img
                            src="/img/pins/3.png"
                            alt="A Derelict Chorale"
                            className="img-icon col-xs-2"
                        />
                        <p className="col col-sm-10 col-md-8 text-align-left">
                            <a href="narrative/4/event/23">
                                <b>A Derelict Chorale</b>
                            </a>
                            {" - "}
                            Punk folk musician Chris Thorpe-Tracey created A
                            Derelict Chorale, 10 powerful songs about the
                            rebellious 1800s in Hastings when many were evicted
                            from the America Ground.
                        </p>
                    </div>
                    <div className="row mt-3 col-auto ml-0">
                        <img
                            src="/img/pins/4.png"
                            alt="SmartHerDot Dash Salons"
                            className="img-icon col-xs-2"
                        />
                        <p className="col col-sm-10 col-md-8 text-align-left">
                            <a href="/narrative/1/event/1">
                                <b>Dot Dash Salons</b>
                            </a>
                            {" - "}
                            Welcome to the Dot Dash virtual festival: eight
                            one-hour Zoom Salons explore the fascinating history
                            and present-day challenges for Hastings’ America
                            Ground.
                        </p>
                    </div>
                    <div className="row mt-3 col-auto ml-0">
                        <img
                            src="/img/pins/5.png"
                            alt="Rock On, Rock Fair"
                            className="img-icon col-xs-2"
                        />
                        <p className="col col-sm-10 col-md-8 text-align-left">
                            <a href="/narrative/5/event/24">
                                <b>
                                    Rock On, Rock Fair: a Motley Musical of
                                    Raggle-Taggle Folkery with Curious
                                    Characters, Rollicking Rides and
                                    Heart-breaking, Soul-shaking Songs
                                </b>
                            </a>
                            {" - "}
                            Writer Rosanna Lowe, and researcher Julie Gidlow,
                            are developing Rock On, Rock Fair, an exploration in
                            words and song of the historic Rock Fairs that took
                            place over centuries in the Trinity Triangle.
                        </p>
                    </div>
                    <div className="row mt-3 col-auto ml-0">
                        <img
                            src="/img/pins/6.png"
                            alt="Remixed & Remade"
                            className="img-icon col-xs-2"
                        />
                        <p className="col col-sm-10 col-md-8 text-align-left">
                            <a href="/narrative/6/event/25">
                                <b>Remixed & Remade</b>
                            </a>
                            {" - "}
                            In 2020 Chris Thorpe-Tracey created A Derelict
                            Chorale, a series of songs about the turbulent
                            history of Hastings’ American Ground area. Now,
                            three local artists, Rebecca Child, Mary Hooper and
                            Juliet Russell, have created their own pieces
                            inspired by A Derelict Chorale, each artist
                            responding in their own unique way to the songs.
                            Film-maker Sam Sharples made a short documentary
                            about the commissions.
                        </p>
                    </div>
                    <div className="row mt-3 col-auto ml-0">
                        <p className="col-sm-10 col-md-8 text-align-left">
                            Development of the Smart Heritage pilot map was
                            funded by <a href="https://www.thersa.org/">RSA</a>{" "}
                            and the map was built by{" "}
                            <a href="https://drjonnicholson.com">
                                Jon Nicholson
                            </a>
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
                </div>
            )}
        </main>
    );
};

export default Main;
