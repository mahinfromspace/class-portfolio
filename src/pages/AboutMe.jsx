import Main from '../components/Main'

const skills = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'PostgreSQL',
    'Git & GitHub',
    'Data Analysis',
    'Video Editing',
    'Cybersecurity Fundamentals'
]

export default function AboutMe() {
    return (
        <>
            <section className="heroSection aboutHeroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText aboutHeroText">
                                <span className="aboutHeroLabel">
                                    About Me
                                </span>

                                <h1>
                                    Learning, creating, and building my path in technology.
                                </h1>

                                <p>
                                    I am Mahin Ahmed, a Digital Business and Innovation
                                    student in Japan. I am developing my skills in web
                                    development, databases, data, cybersecurity, design,
                                    and digital content creation.
                                </p>

                                <div className="aboutHeroActions">
                                    <a
                                        href="https://mahinahmed.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="aboutPrimaryButton"
                                    >
                                        Visit My Personal Website
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section
                id="about-details"
                className="aboutProfileSection"
            >
                <div className="aboutPageContainer">
                    <header className="aboutSectionHeader">
                        <span>My Profile</span>

                        <h2>Who I Am</h2>

                        <p>
                            My interests connect technology, business, creativity,
                            and communication. I enjoy learning practical skills and
                            applying them through projects.
                        </p>
                    </header>

                    <div className="aboutProfileGrid">
                        <article className="aboutMainCard">
                            <span className="aboutCardNumber">01</span>

                            <h3>Student and Learner</h3>

                            <p>
                                I am originally from Bangladesh and currently study
                                Digital Business and Innovation at Tokyo International
                                University. My degree combines technology, business,
                                data, and digital-product development.
                            </p>

                            <p>
                                I use my university projects as opportunities to practise
                                research, web development, presentation design, data
                                analysis, and communication.
                            </p>
                        </article>

                        <article className="aboutInfoCard">
                            <span className="aboutCardNumber">02</span>

                            <h3>What I Am Learning</h3>

                            <p>
                                I have studied HTML, CSS, JavaScript, and React, and I am
                                gradually moving towards backend development. I have also
                                been learning PostgreSQL to understand how websites and
                                applications store and manage data.
                            </p>
                        </article>

                        <article className="aboutInfoCard">
                            <span className="aboutCardNumber">03</span>

                            <h3>My Career Direction</h3>

                            <p>
                                My current goal is to become a full-stack developer.
                                After gaining professional development experience, I
                                would also like to explore DevOps, cloud technology, and
                                scalable digital systems.
                            </p>
                        </article>

                        <article className="aboutInfoCard">
                            <span className="aboutCardNumber">04</span>

                            <h3>Creative Interests</h3>

                            <p>
                                Alongside technology, I enjoy video creation, cinematic
                                storytelling, visual design, and photography. I want to
                                continue combining technical skills with creative
                                communication.
                            </p>
                        </article>

                        <article className="aboutInfoCard">
                            <span className="aboutCardNumber">05</span>

                            <h3>Life in Japan</h3>

                            <p>
                                Living and studying in Japan has encouraged me to become
                                more independent, adaptable, and responsible. I am also
                                continuing to improve my Japanese for university, work,
                                and my future career.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="aboutSkillsSection">
                <div className="aboutPageContainer">
                    <div className="aboutSkillsLayout">
                        <div className="aboutSkillsIntro">
                            <span>Developing Skills</span>

                            <h2>Skills I Am Building</h2>

                            <p>
                                I am still at the beginning of my professional journey,
                                but each course and personal project helps me build a
                                stronger foundation.
                            </p>

                            <a
                                href="https://mahinahmed.com"
                                target="_blank"
                                rel="noreferrer"
                                className="aboutWebsiteLink"
                            >
                                Explore mahinahmed.com
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>

                        <div className="aboutSkillsGrid">
                            {skills.map((skill, index) => (
                                <div
                                    className="aboutSkillItem"
                                    key={skill}
                                >
                                    <span>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <strong>{skill}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="aboutClosingSection">
                <div className="aboutPageContainer">
                    <div className="aboutClosingCard">
                        <span>My Journey</span>

                        <h2>
                            I am building my future one project at a time.
                        </h2>

                        <p>
                            This portfolio documents that process: what I study,
                            what I create, the mistakes I make, and the progress I
                            achieve throughout the semester.
                        </p>

                        <a
                            href="https://mahinahmed.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit My Main Portfolio
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}