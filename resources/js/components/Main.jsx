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
                            This Is For Everyone
                        </a>{" "}
                        took place in Summer 2019 – see digital artwork by
                        Rosanna Lowe, Judith Ricketts and Kevin Grist, funded by{" "}
                        <a href="https://www.artscouncil.org.uk/">
                            Arts Council England
                        </a>
                    </p>
                    <p className="col-sm-10 col-md-8 text-align-left">
                        <a href="http://www.mslprojects.co.uk/our-past-our-future-developing-historical-sources-for-creative-inspiration/">
                            Our Past, Our Future
                        </a>{" "}
                        Took place in Winter 2019 – see work by our history and
                        creative writing group funded by{" "}
                        <a href="https://www.thespace.org/">The Space</a>
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
