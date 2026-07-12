import Main from '../components/Main'
import useScrollReveal from '../hooks/useScrollReveal'

const researchSources = [
    {
        title: 'World Health Organization',
        detail: 'Adolescent mental health fact sheet',
        href: 'https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health'
    },
    {
        title: 'Bronnie Ware',
        detail: 'Regrets of the Dying',
        href: 'https://bronnieware.com/blog/regrets-of-the-dying/'
    },
    {
        title: 'Piers Steel (2007)',
        detail: 'The Nature of Procrastination',
        href: 'https://pubmed.ncbi.nlm.nih.gov/17201571/'
    }
]

export default function PresentationTwo() {
    useScrollReveal()

    const youtubeVideoId = 'z9wIbUkZrHU?si=kRrJ58g9TNEZ7PUG'
    const youtubeEmbedUrl =
        `https://www.youtube.com/embed/${youtubeVideoId}`

    const youtubeWatchUrl =
        `https://youtu.be/z9wIbUkZrHU?si=-apIf-F6jxsLjdNI`

    return (
        <>
            <section className="heroSection p2HeroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText p2HeroText">
                                <span className="p2HeroEyebrow">
                                    Presentation #2 · Video Essay
                                </span>

                                <h1>The Art of Feeling Alive</h1>

                                <p>
                                    An informative video presentation about time,
                                    meaning, procrastination, and the choices that
                                    make ordinary life feel real.
                                </p>

                                <div className="p2HeroActions">


                                    <a
                                        href={youtubeWatchUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p2PrimaryButton"
                                    >
                                        Open on YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section
                id="watch-presentation"
                className="p2WatchSection"
            >
                <div className="p2Ambient p2AmbientOne"></div>
                <div className="p2Ambient p2AmbientTwo"></div>

                <div className="p2Container p2WatchGrid">
                    <article
                        className="p2GoalCard"
                        data-reveal
                    >
                        <span className="p2SectionLabel">
                            Project Goal
                        </span>

                        <h2>Living With Intention</h2>

                        <p>
                            The video explores why people delay truly living
                            while waiting for the perfect time, confidence,
                            success, or clarity.
                        </p>

                        <p>
                            Research, film examples, original Tokyo footage,
                            music, and voice-over support one central idea:
                            life is already happening now.
                        </p>
                    </article>

                    <div
                        className="p2VideoFrame"
                        data-reveal
                        style={{
                            '--reveal-delay': '120ms'
                        }}
                    >
                        <iframe
                            src={youtubeEmbedUrl}
                            title="The Art of Feeling Alive"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="p2ReflectionSection">
                <div className="p2Container">
                    <article
                        className="p2ReflectionCard"
                        data-reveal
                    >
                        <div className="p2ReflectionIntro">
                            <span className="p2SectionLabel p2DarkLabel">
                                Write-Up
                            </span>

                            <h2>Project Reflection</h2>

                            <p className="p2ReflectionLead">
                                A personal project that allowed me to practise
                                the same message I was presenting: beginning
                                before feeling completely ready.
                            </p>
                        </div>

                        <div className="p2ReflectionColumns">
                            <div>
                                <h3>Project and Purpose</h3>

                                <p>
                                    For this project, I created a video presentation
                                    titled “The Art of Feeling Alive.” Its goal is to
                                    explore why people often delay truly living while
                                    waiting for the perfect time, confidence, success,
                                    or clarity.
                                </p>

                                <p>
                                    The presentation is informative because it uses
                                    research-based facts, film examples, original
                                    footage, music, and voice-over to explain the
                                    importance of living with intention.
                                </p>

                                <p>
                                    The main message is that life does not begin only
                                    after success or after everything becomes perfect.
                                    Life is already happening now.
                                </p>
                            </div>

                            <div>
                                <h3>Requirements and Structure</h3>

                                <p>
                                    I was required to create a 2–5 minute video
                                    presentation with a clear topic, thesis or goal,
                                    introduction, organized body, conclusion, audio,
                                    text, visual media, and a sources section.
                                </p>

                                <p>
                                    I also needed to organize the presentation like
                                    an academic essay, with unity, coherence, and
                                    development.
                                </p>

                                <p>
                                    The video begins with a short clip from
                                    <em> Dead Poets Society</em> as a hook. The body
                                    develops the message through narration, research,
                                    movie clips, and original Tokyo footage.
                                </p>
                            </div>

                            <div>
                                <h3>Changes and Skills</h3>

                                <p>
                                    After peer review, I made the script more concise,
                                    added clearer research facts, improved the pacing
                                    to match the background music, and added a complete
                                    sources and fair use section.
                                </p>

                                <p>
                                    I used CapCut for trimming, voice-over, background
                                    music, audio timing, transitions, text animation,
                                    and source credits.
                                </p>

                                <p>
                                    I reinforced my skills in academic organization,
                                    responsible source use, visual storytelling, and
                                    video editing.
                                </p>
                            </div>

                            <div>
                                <h3>Personal Reflection</h3>

                                <p>
                                    This project was meaningful because I personally
                                    relate to delaying life and waiting for the right
                                    time.
                                </p>

                                <p>
                                    I had also delayed taking my video-creation hobby
                                    seriously. By completing this presentation, I was
                                    not only talking about beginning before feeling
                                    ready—I was actually doing it.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="p2SourcesSection">
                <div className="p2Container">
                    <header
                        className="p2SourcesHeader"
                        data-reveal
                    >
                        <span className="p2SectionLabel">
                            Sources & Credits
                        </span>

                        <h2>Media and Research Used</h2>
                    </header>

                    <div className="p2SourcesGrid">
                        <article
                            className="p2SourceCard"
                            data-reveal
                        >
                            <span>Film</span>

                            <h3>Clips used under fair use</h3>

                            <ul>
                                <li>Dead Poets Society</li>
                                <li>The Pursuit of Happyness</li>
                                <li>Into the Wild</li>
                                <li>The Secret Life of Walter Mitty</li>
                            </ul>
                        </article>

                        <article
                            className="p2SourceCard"
                            data-reveal
                            style={{
                                '--reveal-delay': '80ms'
                            }}
                        >
                            <span>Music</span>

                            <h3>Background tracks</h3>

                            <ul>
                                <li>“Meris” — Jordan Critz</li>
                                <li>“Hope” — Tony Anderson</li>
                            </ul>
                        </article>

                        <article
                            className="p2SourceCard"
                            data-reveal
                            style={{
                                '--reveal-delay': '160ms'
                            }}
                        >
                            <span>Research</span>

                            <h3>Data and written sources</h3>

                            <ul className="p2LinkedSources">
                                {researchSources.map(source => (
                                    <li key={source.title}>
                                        <a
                                            href={source.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <strong>{source.title}</strong>
                                            <small>{source.detail}</small>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article
                            className="p2SourceCard"
                            data-reveal
                            style={{
                                '--reveal-delay': '240ms'
                            }}
                        >
                            <span>Production</span>

                            <h3>Tools and original media</h3>

                            <ul>
                                <li>Editing software: CapCut</li>
                                <li>
                                    All other video clips were recorded by me.
                                </li>
                            </ul>
                        </article>
                    </div>

                    <div
                        className="p2FairUse"
                        data-reveal
                    >
                        <strong>Fair Use Statement</strong>

                        <p>
                            This video was created only for an educational
                            classroom project. Short film clips are used for
                            commentary, reflection, and presentation purposes.
                            No commercial use is intended.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}