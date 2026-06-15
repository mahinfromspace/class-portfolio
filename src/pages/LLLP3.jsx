import Main from '../components/Main'

import learningResource from '../assets/lllp3-resource.png'
import whereScreenshot from '../assets/lllp3-where.png'
import orderScreenshot from '../assets/lllp3-order.png'

export default function LLLP3() {
    return (
        <>
            <section className="heroSection lllpOneHero">
                <Main>
                    <div className="lllpHeroContent">
                        <div className="row heroMainPart d-flex justify-content-around align-items-center">
                            <div className="col-md-10">
                                <div className="heroText lllpOneHeroText">
                                    <p className="lllpEyebrow">
                                        Lifelong Learning Project · PostgreSQL
                                    </p>

                                    <h1>LLLP #3</h1>

                                    <p>
                                        For my third LLLP page, I continued learning
                                        PostgreSQL and focused on filtering, sorting,
                                        and organizing database records.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lllpOneGlassWrapper heroIntroGlass">
                            <div className="lllpOneHeader">
                                <span>2 Hours Study Session</span>

                                <h2>Filtering and Sorting Data</h2>

                                <p>
                                    In this session, I learned how to retrieve specific
                                    records instead of displaying every row in a table.
                                    I practised using conditions, sorting results, and
                                    limiting the number of records returned.
                                </p>
                            </div>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>What I Studied</h3>

                                        <p>
                                            I studied WHERE, AND, OR, ORDER BY, DESC,
                                            ASC, LIMIT, LIKE, and BETWEEN. These commands
                                            helped me filter and organize data based on
                                            different conditions.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>My Experience</h3>

                                        <p>
                                            At first, I needed time to understand how
                                            multiple conditions worked together. After
                                            running different queries and comparing the
                                            output, filtering and sorting became much
                                            easier to understand.
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
                    <div className="lllpLearningWrapper">
                        <div className="row g-4 align-items-stretch">
                            <div className="col-md-6">
                                <div className="lllpOneContentBlock">
                                    <span>Learning Process</span>

                                    <h2>My Hours 5–6</h2>

                                    <p>
                                        During this two-hour session, I first read an
                                        online article about filtering and sorting in
                                        PostgreSQL. The examples explained how WHERE
                                        selects only records that match a condition and
                                        how ORDER BY arranges the results.
                                    </p>

                                    <p>
                                        After reading the article, I created a students
                                        table in OneCompiler and inserted six sample
                                        records. I then tested different SQL queries and
                                        checked how the output changed.
                                    </p>

                                    <p>
                                        I practised combining WHERE with AND to filter
                                        students using both their age and course. I also
                                        used ORDER BY with DESC and LIMIT to show only
                                        the three oldest students.
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

                                    <pre>{`SELECT *
FROM students
WHERE age >= 20
AND course = 'Digital Business'
ORDER BY age DESC
LIMIT 3;`}</pre>

                                    <p>
                                        This query filters students by age and course,
                                        sorts them from oldest to youngest, and displays
                                        only three records.
                                    </p>
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

                        <h2>Commands I Learned</h2>

                        <p>
                            I focused on commands used to search, filter, sort, and
                            limit PostgreSQL query results.
                        </p>
                    </div>

                    <div className="lllpCommandGrid lllpThreeCommandGrid">
                        <article className="simpleCommandCard">
                            <h3>WHERE, AND and OR</h3>

                            <p>
                                WHERE filters records. AND requires both conditions
                                to be true, while OR requires only one condition.
                            </p>

                            <pre>{`SELECT *
FROM students
WHERE age >= 20
AND course = 'Digital Business';`}</pre>
                        </article>

                        <article className="simpleCommandCard">
                            <h3>ORDER BY and LIMIT</h3>

                            <p>
                                ORDER BY sorts the results, while LIMIT controls the
                                number of records displayed.
                            </p>

                            <pre>{`SELECT *
FROM students
ORDER BY age DESC
LIMIT 3;`}</pre>
                        </article>

                        <article className="simpleCommandCard">
                            <h3>LIKE and BETWEEN</h3>

                            <p>
                                LIKE searches for text patterns, while BETWEEN finds
                                values inside a specific range.
                            </p>

                            <pre>{`SELECT *
FROM students
WHERE name LIKE 'M%';

SELECT *
FROM students
WHERE age BETWEEN 18 AND 22;`}</pre>
                        </article>
                    </div>
                </div>
            </section>

            <section className="lllpOneScreenshotsSection">
                <div className="lllpPageContainer">
                    <div className="screenshotsOuterBox">
                        <div className="lllpOneHeader">
                            <span>Evidence of Learning</span>

                            <h2>Screenshots</h2>

                            <p>
                                These screenshots show the learning resource and
                                practical exercises I used during my PostgreSQL study
                                session.
                            </p>
                        </div>

                        <div className="lllpScreenshotGrid">
                            <article className="lllpScreenshotCard">
                                <a
                                    href="https://dev.to/s_mathavi_2fa1e3ea8514f34/postgresqlfiltering-sorting-41ka"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={learningResource}
                                        alt="DEV Community PostgreSQL filtering and sorting article"
                                    />
                                </a>

                                <div className="screenshotText">
                                    <h3>Learning Resource</h3>

                                    <p>
                                        I used this DEV Community article to learn how
                                        PostgreSQL filters records using WHERE and sorts
                                        records using ORDER BY.
                                    </p>

                                    <a
                                        href="https://dev.to/s_mathavi_2fa1e3ea8514f34/postgresqlfiltering-sorting-41ka"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="resourceButton"
                                    >
                                        View Resource
                                    </a>
                                </div>
                            </article>

                            <article className="lllpScreenshotCard">
                                <img
                                    src={whereScreenshot}
                                    alt="PostgreSQL WHERE and AND query result"
                                />

                                <div className="screenshotText">
                                    <h3>Filtering with WHERE and AND</h3>

                                    <p>
                                        I used WHERE and AND to display only students
                                        aged 20 or older who were studying Digital
                                        Business. The query returned three matching
                                        records.
                                    </p>
                                </div>
                            </article>

                            <article className="lllpScreenshotCard">
                                <img
                                    src={orderScreenshot}
                                    alt="PostgreSQL ORDER BY and LIMIT query result"
                                />

                                <div className="screenshotText">
                                    <h3>Sorting with ORDER BY and LIMIT</h3>

                                    <p>
                                        I used ORDER BY with DESC to sort students from
                                        oldest to youngest. I then used LIMIT 3 to show
                                        only the first three records.
                                    </p>
                                </div>
                            </article>
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
                            During this session, I learned that I understand database
                            commands better when I first read a simple explanation and
                            then immediately practise it with my own data.
                        </p>

                        <p>
                            I enjoyed this session because the results changed
                            instantly whenever I modified a condition. This made it
                            easier to understand the purpose of each SQL command.
                        </p>

                        <p>
                            The most challenging part was remembering the correct order
                            of the SQL clauses. Repeating the queries helped me become
                            more comfortable with the syntax.
                        </p>

                        <p>
                            I am motivated to continue learning PostgreSQL because
                            filtering and sorting are important for search systems,
                            dashboards, customer lists, and many other real
                            applications.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}