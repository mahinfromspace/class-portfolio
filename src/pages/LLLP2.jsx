import Main from '../components/Main'
import ScreenshotOne from '../assets/lllp2 ss1.png'
import ScreenshotTwo from '../assets/lllp2 ss2.png'
import ScreenshotThree from '../assets/lllp2 ss3.png'

export default function LLLP2() {
    return (
        <>
            <section className="heroSection lllpOneHero lllpTwoHero">
                <Main>
                    <div className="lllpHeroContent">
                        <div className="row heroMainPart d-flex justify-content-around align-items-center">
                            <div className="col-md-10">
                                <div className="heroText lllpOneHeroText">
                                    <h1>LLLP #2</h1>
                                    <p>
                                        For my second LLLP page, I continued learning PostgreSQL and started practicing very basic SQL commands.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lllpOneGlassWrapper heroIntroGlass lllpTwoIntroGlass">
                            <div className="lllpOneHeader">
                                <span>2 Hours Study Session</span>
                                <h2>Starting Basic SQL Commands</h2>
                                <p>
                                    In this session, I started learning how to use simple SQL commands in PostgreSQL. I focused on understanding what the commands do, not memorizing everything perfectly. As a front-end developer, learning PostgreSQL is a great upskill for me because it helps me understand how data is stored and managed behind the websites and applications I create.
                                </p>
                            </div>

                            <div className="row g-4 align-items-stretch">
                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>What I Studied</h3>
                                        <p>
                                            I studied simple commands like CREATE TABLE, INSERT INTO, and SELECT. These commands are used to create a table, add data, and view data from a table.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>My Experience</h3>
                                        <p>
                                            At first, SQL looked confusing because the commands have a specific structure. After reading examples and watching a tutorial, I started to see that SQL is like giving clear instructions to a database.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="lllpOneLearningSection lllpTwoPracticeSection">
                <div className="lllpPageContainer">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                            <div className="lllpOneContentBlock">
                                <span>Learning Process</span>
                                <h2>My Hours 3-4</h2>
                                <p>
                                    During this study session, I used online resources and a YouTube tutorial to understand basic SQL commands. I learned that tables are important because they store data in rows and columns. I also learned that SQL commands must be written carefully because small mistakes can cause errors.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="sqlTerminalCard">
                                <div className="terminalTopBar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <h3>Simple Practice Example</h3>

                                <pre>{`CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT
);`}</pre>

                                <p>
                                    This was one example I studied to understand how a simple table can be created in PostgreSQL.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneTopicsSection lllpTwoCommandsSection">
                <div className="lllpPageContainer">
                    <div className="lllpOneHeader">
                        <span>Main Topics Covered</span>
                        <h2>Commands I Learned</h2>
                        <p>
                            I only focused on a few basic commands in this session so I could understand the foundation clearly.
                        </p>
                    </div>

                    <div className="simpleCommandGrid">
                        <div className="simpleCommandCard">
                            <h3>CREATE TABLE</h3>
                            <p>
                                I learned that this command is used to create a new table in a database.
                            </p>

                            <pre>{`CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT
);`}</pre>
                        </div>

                        <div className="simpleCommandCard">
                            <h3>INSERT INTO</h3>
                            <p>
                                I learned that this command is used to add new information into a table.
                            </p>

                            <pre>{`INSERT INTO students (name, age)
VALUES ('Mahin', 22);`}</pre>
                        </div>

                        <div className="simpleCommandCard">
                            <h3>SELECT</h3>
                            <p>
                                I learned that this command is used to view data from a table.
                            </p>

                            <pre>{`SELECT * FROM students;`}</pre>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneScreenshotsSection lllpTwoScreenshotsSection">
                <div className="lllpPageContainer">
                    <div className="lllpOneHeader">
                        <span>Evidence of Learning</span>
                        <h2>Screenshots</h2>
                        <p>
                            These screenshots show some of the resources and practices I used while learning the basic SQL commands.
                        </p>
                    </div>

                    <div className="screenshotGrid">
                        <div className="screenshotPlaceholder small">
                            <div>
                                <img src={ScreenshotOne} alt="Learning screenshot one" className="img-fluid" />
                            </div>
                        </div>

                        <div className="screenshotPlaceholder small">
                            <div>
                                <img src={ScreenshotTwo} alt="Learning screenshot two" className="img-fluid" />
                            </div>
                        </div>

                        <div className="screenshotPlaceholder small">
                            <div>
                                <img src={ScreenshotThree} alt="Learning screenshot three" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneReflectionSection lllpTwoReflectionSection">
                <div className="lllpPageContainer">
                    <div className="reflectionGlassCard">
                        <span>Reflection</span>
                        <h2>What I Learned About Myself</h2>

                        <p>
                            In this session, I learned that I understand technical topics better when I study them slowly with simple examples. PostgreSQL still feels new to me, but basic SQL commands are becoming easier to understand.
                        </p>

                        <p>
                            I also realized that I need more practice because SQL depends on correct spelling, punctuation, and order. Even though I am still at the beginner level, I feel more confident than before because I can now understand the purpose of some basic commands. As someone interested in front-end development, I think learning database basics will help me become a more complete developer.
                        </p>

                        <div className="sourceLinks">
                            <a href="https://www.postgresql.org/docs/" target="_blank" rel="noreferrer">
                                PostgreSQL Documentation
                            </a>

                            <a href="https://www.w3schools.com/sql/" target="_blank" rel="noreferrer">
                                W3Schools SQL Tutorial
                            </a>

                            <a href="https://www.youtube.com/watch?v=qw--VYLpxG4&t=43s" target="_blank" rel="noreferrer">
                                YouTube PostgreSQL Tutorial
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}