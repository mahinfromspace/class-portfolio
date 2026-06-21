import { Link } from 'react-router-dom'
import Main from '../components/Main'

export default function DataProjects() {
    return (
        <>
            <section className="heroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText">
                                <h1>Data Projects</h1>

                                <p>
                                    This page presents my data projects for IT Literacy. In these projects,
                                    I collected, organized, calculated, visualized, and analyzed data using
                                    Google Forms and Google Sheets. Data Project #1 focuses on screen-time
                                    usage, while Data Project #2 focuses on the effect of social media on
                                    university students’ daily-life productivity.
                                </p>

                                <div className="dataHeroButtons">
                                    <Link to="/data-projects/1" className="dataProjectButton">
                                        View Data Project #1
                                    </Link>

                                    <Link to="/data-projects/2" className="dataProjectButton">
                                        View Data Project #2
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="dataProjectsOverviewSection">
                <div className="dataProjectContentContainer">
                    <div className="dataSectionHeader">
                        <span>Project Overview</span>

                        <h2>My Data Collection and Analysis Work</h2>

                        <p>
                            These projects helped me practice working with real data. I used spreadsheets
                            to organize responses, apply formulas, create charts, and explain trends based
                            on the information collected.
                        </p>
                    </div>

                    <div className="dataProjectsGrid">
                        <div className="dataProjectOverviewCard">
                            <span>Data Project #1</span>

                            <h3>Screen-Time Usage Analysis</h3>

                            <p>
                                In my first data project, I analyzed my screen-time usage across different
                                apps and devices. I calculated totals and averages, then created charts to
                                understand which apps I used the most during the week.
                            </p>

                            <Link to="/data-projects/1">Open Data Project #1</Link>
                        </div>

                        <div className="dataProjectOverviewCard">
                            <span>Data Project #2</span>

                            <h3>Social Media and Productivity</h3>

                            <p>
                                In my second data project, I created a Google Form survey about social media
                                usage among university students. I analyzed platform preference, social media
                                checking frequency during study, and students’ opinions about concentration.
                            </p>

                            <Link to="/data-projects/2">Open Data Project #2</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}