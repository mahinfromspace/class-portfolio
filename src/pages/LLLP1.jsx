import Main from '../components/Main'
import ScreenshotOne from '../assets/screenshot1.png'
import ScreenshotTwo from '../assets/screenshot2.png'
import ScreenshotThree from '../assets/screenshot3.png'
export default function LLLP1() {
    return (
        <>
            <section className="heroSection lllpOneHero">
                <Main>
                    <div className="lllpHeroContent">
                        <div className="row heroMainPart d-flex justify-content-around align-items-center">
                            <div className="col-md-10">
                                <div className="heroText lllpOneHeroText">
                                    <h1>LLLP #1</h1>
                                    <p>
                                        For my first LLLP page, I will explain why I chose PostgreSQL and what I want to learn from this project.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lllpOneGlassWrapper heroIntroGlass">
                            <div className="lllpOneHeader">
                                <span>2 Hours Study Session</span>
                                <h2>Introduction to Databases and PostgreSQL</h2>
                                <p>
                                    In my first Lifelong Learning Project session, I focused on understanding the basic meaning of data management, databases, and PostgreSQL. This helped me build a foundation before learning SQL commands and database design.
                                </p>
                            </div>

                            <div className="row g-4 align-items-stretch">
                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>What I Studied</h3>
                                        <p>
                                            I learned that data management, the process of collecting, organizing, processing, and using data in a secure and efficient way. This is important because websites, apps, businesses, and AI systems all depend on data.
                                        </p>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>Why PostgreSQL?</h3>
                                        <p>
                                            PostgreSQL is an open-source object-relational database management system. I chose PostgreSQL because it is powerful, reliable, and useful for many real-world projects.
                                            PostgreSQL will help me understand how data is stored and managed behind digital systems.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="lllpOneLearningSection">
                <div className="lllpPageContainer">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                            <div className="lllpOneContentBlock">
                                <span>Learning Process</span>
                                <h2>My First 2 Hours</h2>
                                <p>
                                    During this session, I started by reading about data management from IBM.  After that, I explored the PostgreSQL official website to understand what PostgreSQL is and why it is used.
                                </p>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="screenshotPlaceholder">
                                <div>
                                    <a href="https://www.ibm.com/think/topics/data-management">
                                        <img className='img-fluid' src={ScreenshotOne} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneTopicsSection">
                <div className="lllpPageContainer">
                    <div className="lllpOneHeader">
                        <span>Main Topics Covered</span>
                        <h2>Database Basics I Learned</h2>
                    </div>

                    <div className="topicsGrid">
                        <div className="topicGlassBox">
                            <h3>Database</h3>
                            <p>
                                A database is a system used to store and organize information. It allows users to manage data in a structured way.
                            </p>
                        </div>

                        <div className="topicGlassBox">
                            <h3>Table</h3>
                            <p>
                                A table stores data in rows and columns. It is similar to a spreadsheet but more powerful.
                            </p>
                        </div>

                        <div className="topicGlassBox">
                            <h3>Row</h3>
                            <p>
                                A row represents one complete record inside a table, such as one student, one product, or one user.
                            </p>
                        </div>

                        <div className="topicGlassBox">
                            <h3>Column</h3>
                            <p>
                                A column represents one type of information, such as name, email, age, category, or price.
                            </p>
                        </div>

                        <div className="topicGlassBox">
                            <h3>Primary Key</h3>
                            <p>
                                A primary key is a unique value used to identify each record in a table.
                            </p>
                        </div>

                        <div className="topicGlassBox">
                            <h3>PostgreSQL</h3>
                            <p>
                                PostgreSQL is a database system that helps store, manage, and retrieve structured data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneScreenshotsSection">
                <div className="lllpPageContainer">
                    <div className="lllpOneHeader">
                        <span>Evidence of Learning</span>
                        <h2>Screenshots</h2>
                        <p>
                            Here are some snapshots of the notes and resources I have used.
                        </p>
                    </div>

                    <div className="screenshotGrid">
                        <div className="screenshotPlaceholder small">
                            <div>
                                <img src={ScreenshotOne} alt="" className='img-fluid' />
                            </div>
                        </div>

                        <div className="screenshotPlaceholder small">
                            <div>
                                <img src={ScreenshotTwo} alt="" className='img-fluid' />
                            </div>
                        </div>

                        <div className="screenshotPlaceholder small">
                            <div>
                                <img src={ScreenshotThree} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneReflectionSection">
                <div className="lllpPageContainer">
                    <div className="reflectionGlassCard">
                        <span>Reflection</span>
                        <h2>What I Learned About Myself</h2>
                        <p>
                            I would call this study session a productive one as I went through the basics and even though it might not look too much, it is still essential for learning more technical stuff. Before practicing SQL commands, I needed to understand what databases are and why they are useful. Reading about data management gave me a bigger picture of how data is used in real life.
                        </p>
                        <p>
                            I also learned that PostgreSQL connects well with my future goals. Since I am interested in websites, data, and Artificial
                        </p>

                        <div className="sourceLinks">
                            <a href="https://www.ibm.com/think/topics/data-management" target="_blank" rel="noreferrer">
                                IBM Data Management
                            </a>
                            <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
                                PostgreSQL Official Website
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}