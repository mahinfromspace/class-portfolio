import { Link } from 'react-router-dom'
import Main from '../components/Main'
import TreeLogo from '../assets/tree.png'
import useScrollReveal from '../hooks/useScrollReveal'

const journeyItems = [
    {
        step: '01',
        title: 'About Me',
        description:
            'An introduction to who I am, my interests, and the skills I want to develop during this course.',
        link: '/about-me',
        button: 'Read About Me'
    },
    {
        step: '02',
        title: 'Lifelong Learning Project',
        description:
            'My ten-hour PostgreSQL journey, from database basics to SQL commands, joins, and a final mini project.',
        link: '/lllp',
        button: 'Explore My LLLP'
    },
    {
        step: '03',
        title: 'Presentations',
        description:
            'Research, storytelling, and visual communication through my two class presentation projects.',
        link: '/presentations',
        button: 'View Presentations'
    },
    {
        step: '04',
        title: 'Poster Projects',
        description:
            'My poster drafts, final designs, color palettes, and reflections on typography and visual hierarchy.',
        link: '/posters',
        button: 'View Posters'
    },
    {
        step: '05',
        title: 'Data Projects',
        description:
            'My work with Google Forms, Google Sheets, formulas, charts, data analysis, and written reflection.',
        link: '/data-projects',
        button: 'View Data Projects'
    }
]

export default function Home() {
    useScrollReveal()

    return (
        <>
            <section className="heroSection homeHeroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-7">
                            <div className="heroText homeHeroText">
                                <span className="homeHeroEyebrow">
                                    IT Literacy Portfolio
                                </span>

                                <h1>
                                    A class portfolio documenting my learning journey,
                                    projects, presentations, posters, and my Lifelong
                                    Learning Project on PostgreSQL.
                                </h1>

                                <p>
                                    Created to track my growth, organize my coursework,
                                    and reflect on the skills I develop during the semester.
                                </p>

                                <div className="homeHeroActions">
                                    <a
                                        href="#learning-journey"
                                        className="homePrimaryButton"
                                    >
                                        Start Exploring
                                    </a>

                                    <Link
                                        to="/presentations"
                                        className="homeSecondaryButton"
                                    >
                                        View Presentations
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="homeTreeFrame">
                                <img
                                    src={TreeLogo}
                                    alt="A growing tree representing my learning journey"
                                />
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section
                id="learning-journey"
                className="homeJourneySection"
            >
                <div className="homeJourneyGlow homeJourneyGlowOne"></div>
                <div className="homeJourneyGlow homeJourneyGlowTwo"></div>

                <div className="homeJourneyContainer">
                    <header
                        className="homeJourneyHeader"
                        data-reveal
                    >
                        <span>Learning Roadmap</span>

                        <h2>My IT Literacy Journey</h2>

                        <p>
                            Every section represents a different part of my semester,
                            from learning technical skills to communicating ideas
                            through data, design, and video.
                        </p>
                    </header>

                    <div className="homeJourneyGrid">
                        {journeyItems.map((item, index) => (
                            <Link
                                to={item.link}
                                className="homeJourneyCard"
                                data-reveal
                                style={{
                                    '--reveal-delay': `${index * 90}ms`
                                }}
                                key={item.step}
                            >
                                <div className="homeJourneyNumber">
                                    {item.step}
                                </div>

                                <div className="homeJourneyCardBody">
                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    <span>
                                        {item.button}
                                        <b aria-hidden="true">→</b>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}