import Main from '../components/Main'
import { Link } from 'react-router-dom'

export default function Posters() {
    return (
        <>
            <section className="heroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText">
                                <h1>Posters</h1>
                                <p>
                                    This section includes my poster projects for this class. Each poster page shows the rough draft, final draft, color scheme screenshot, and a paragraph explaining my design choices and changes during the drafting process.
                                </p>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="posterProjectSection">
                <div className="posterPageContainer">
                    <div className="posterSectionHeader">
                        <span>Poster Assignment</span>
                        <h2>My Poster Projects</h2>
                        <p>
                            For this assignment, I created two posters from blank documents without using templates. I used design principles such as typography, alignment, visual hierarchy, balance, contrast, proximity, repetition, and negative space. I also chose color palettes using an online color scheme tool and included screenshots of the palettes on each poster page.
                        </p>
                    </div>

                    <div className="posterOverviewGrid">
                        <div className="posterOverviewCard">
                            <span>Poster #1</span>
                            <h3>SQL Injection</h3>
                            <p>
                                My first poster is about cybersecurity. It explains what SQL Injection is, why it is dangerous, and how it can be prevented.
                            </p>

                            <Link to="/posters/1" className="posterOverviewButton">
                                View Poster #1
                            </Link>
                        </div>

                        <div className="posterOverviewCard">
                            <span>Poster #2</span>
                            <h3>BLUE 2026</h3>
                            <p>
                                My second poster is an event poster for a fictional ocean awareness event focused on cleanup, art, and recycling.
                            </p>

                            <Link to="/posters/2" className="posterOverviewButton">
                                View Poster #2
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}