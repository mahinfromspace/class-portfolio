import { Link } from 'react-router-dom'
import Main from '../components/Main'
import useScrollReveal from '../hooks/useScrollReveal'

const presentationCards = [
    {
        number: '01',
        label: 'Presentation #1',
        title: 'Circular Reporting and Fake News',
        description:
            'An informative presentation explaining how repeated, unverified information can begin to appear credible and spread as fake news.',
        link: '/presentations/1',
        format: 'PDF Presentation',
        className: 'presentationCardOne'
    },
    {
        number: '02',
        label: 'Presentation #2',
        title: 'The Art of Feeling Alive',
        description:
            'A cinematic video essay about time, procrastination, meaning, and beginning before life feels perfectly planned.',
        link: '/presentations/2',
        format: 'Video Presentation',
        className: 'presentationCardTwo'
    }
]

export default function Presentations() {
    useScrollReveal()

    return (
        <>
            <section className="heroSection presentationsHeroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText presentationsHeroText">
                                <span className="presentationsHeroEyebrow">
                                    Class Presentations
                                </span>

                                <h1>
                                    Ideas, research, and stories presented visually.
                                </h1>

                                <p>
                                    These projects helped me practise academic organization,
                                    research, visual communication, source use, narration,
                                    and video editing.
                                </p>

                                <a
                                    href="#presentation-gallery"
                                    className="presentationsExploreButton"
                                >
                                    Explore the Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section
                id="presentation-gallery"
                className="presentationsGallerySection"
            >
                <div className="presentationsGalleryContainer">
                    <header
                        className="presentationsGalleryHeader"
                        data-reveal
                    >
                        <span>Project Gallery</span>

                        <h2>My Presentation Work</h2>

                        <p>
                            Each project uses a different format while following
                            the same academic structure: a clear introduction,
                            developed body, and focused conclusion.
                        </p>
                    </header>

                    <div className="presentationsGalleryGrid">
                        {presentationCards.map((card, index) => (
                            <article
                                className={`presentationsProjectCard ${card.className}`}
                                data-reveal
                                style={{
                                    '--reveal-delay': `${index * 120}ms`
                                }}
                                key={card.number}
                            >
                                <div className="presentationsCardTop">
                                    <span>{card.format}</span>
                                    <strong>{card.number}</strong>
                                </div>

                                <div className="presentationsCardContent">
                                    <p>{card.label}</p>

                                    <h3>{card.title}</h3>

                                    <div className="presentationsCardRule"></div>

                                    <p>{card.description}</p>
                                </div>

                                <Link
                                    to={card.link}
                                    className="presentationsCardLink"
                                >
                                    Open Project
                                    <span aria-hidden="true">↗</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}