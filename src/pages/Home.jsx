import { Link } from 'react-router-dom'
import Main from '../components/Main'
import TreeLogo from '../assets/tree.png'
import useScrollReveal from '../hooks/useScrollReveal'
const wrapUpItems = [
    {
        number: '01',
        question: 'What skills and knowledge did I gain?',
        answer:
            'I learned how to use Google Forms and Google Sheets to collect, organize, calculate, and visualize data. I also developed new skills in PostgreSQL, including creating tables, writing SQL commands, filtering data, and connecting tables with joins. Through my presentations, posters, and videos, I improved my research, storytelling, typography, visual hierarchy, and digital communication skills. Building this portfolio also reinforced my React and web-development knowledge.'
    },
    {
        number: '02',
        question: 'What did I excel at, and what was difficult?',
        answer:
            'I feel that I excelled at combining technical work with visual design. I enjoyed organizing my portfolio, designing posters and presentation slides, and finding creative ways to communicate information. The most difficult parts were writing JOIN queries in PostgreSQL, turning raw data into meaningful conclusions, and balancing detailed content with a clean visual layout. These challenges became easier through practice and feedback.'
    },
    {
        number: '03',
        question: 'What would I like to continue learning?',
        answer:
            'After this course, I would like to continue improving my PostgreSQL, data-analysis, and web-development skills. My next goal is to connect PostgreSQL with React, Node.js, and Express to create full-stack applications. I would also like to become more confident with advanced spreadsheet functions, data visualization, presentation design, and digital storytelling.'
    },
    {
        number: '04',
        question: 'What advice would I give to the next class?',
        answer:
            'My advice is to begin every project early and update the portfolio regularly instead of leaving everything until the end. Keep screenshots, links, notes, and project files organized from the beginning. Do not be afraid to experiment with unfamiliar tools, and use feedback to improve each project. Most importantly, choose a Lifelong Learning Project that connects with your interests and future goals.'
    }
]
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
            <section
                id="course-wrap-up"
                className="homeWrapUpSection"
            >
                <div className="homeJourneyGlow homeWrapUpGlow"></div>

                <div className="homeJourneyContainer">
                    <header
                        className="homeJourneyHeader"
                        data-reveal
                    >
                        <span>Final Reflection</span>

                        <h2>Course Wrap-Up</h2>

                        <p>
                            A reflection on the skills I developed, the challenges I faced,
                            and how this course influenced my future learning goals.
                        </p>
                    </header>

                    <div className="homeWrapUpGrid">
                        {wrapUpItems.map((item, index) => (
                            <article
                                className="homeWrapUpCard"
                                data-reveal
                                style={{
                                    '--reveal-delay': `${index * 90}ms`
                                }}
                                key={item.number}
                            >
                                <div className="homeWrapUpNumber">
                                    {item.number}
                                </div>

                                <div className="homeWrapUpCardBody">
                                    <h3>{item.question}</h3>
                                    <p>{item.answer}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <button
                type="button"
                className="homeScrollIndicator"
                onClick={() => {
                    document
                        .getElementById('course-wrap-up')
                        ?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        })
                }}
                aria-label="Scroll to the course wrap-up"
            >
                <span>View Course Wrap-Up</span>

                <div className="homeScrollArrow" aria-hidden="true">
                    <i></i>
                </div>
            </button>
        </>
    )
}