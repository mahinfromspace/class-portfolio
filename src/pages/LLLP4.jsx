import Main from '../components/Main'

import learningResource from '../assets/lllp4-resource.png'
import innerJoinScreenshot from '../assets/lllp4-inner.png'
import leftJoinScreenshot from '../assets/lllp4-left.png'

export default function LLLP4() {
    return (
        <>
            <section className="heroSection lllpOneHero lllpFourHero">
                <Main>
                    <div className="lllpHeroContent">
                        <div className="row heroMainPart d-flex justify-content-around align-items-center">
                            <div className="col-md-10">
                                <div className="heroText lllpOneHeroText">
                                    <h1>LLLP #4</h1>

                                    <p>
                                        For my fourth LLLP page, I learned how database
                                        tables connect using relationships, keys, and JOIN
                                        commands.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lllpOneGlassWrapper heroIntroGlass">
                            <div className="lllpOneHeader">
                                <span>Hours 7–8</span>

                                <h2>Relationships and Joins</h2>

                                <p>
                                    In this session, I studied how PostgreSQL tables can
                                    connect with each other. I learned about primary keys,
                                    foreign keys, one-to-many relationships, INNER JOIN,
                                    and LEFT JOIN.
                                </p>
                            </div>

                            <div className="row g-4 align-items-stretch">
                                <div className="col-md-4">
                                    <div className="lllpOneGlassCard">
                                        <h3>What I Studied</h3>

                                        <p>
                                            I studied primary keys, foreign keys,
                                            one-to-many relationships, INNER JOIN, and LEFT
                                            JOIN.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="lllpOneGlassCard">
                                        <h3>My Experience</h3>

                                        <p>
                                            JOIN queries were more difficult than basic SQL
                                            because I had to understand two connected tables
                                            at the same time.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="lllpOneGlassCard">
                                        <h3>Why It Matters</h3>

                                        <p>
                                            Relationships keep databases organized and allow
                                            applications to retrieve connected information
                                            without repeating data.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>


            <section className="lllpFourLearningSection">
                <div className="lllpPageContainer">
                    <div className="lllpFourSectionHeading">
                        <span>Learning Process</span>
                        <h2>My Hours 7–8</h2>
                    </div>

                    <div className="lllpFourTimeline">
                        <article className="lllpFourTimelineItem">
                            <div className="timelineNumber">1</div>

                            <div>
                                <h3>Understanding Keys</h3>

                                <p>
                                    I first learned that a primary key uniquely
                                    identifies each record in a table. I then
                                    learned that a foreign key stores a reference
                                    to the primary key of another table.
                                </p>
                            </div>
                        </article>

                        <article className="lllpFourTimelineItem">
                            <div className="timelineNumber">2</div>

                            <div>
                                <h3>Creating Connected Tables</h3>

                                <p>
                                    I created a students table and a courses table.
                                    The courses table contained a student_id column
                                    that referenced the students table.
                                </p>
                            </div>
                        </article>

                        <article className="lllpFourTimelineItem">
                            <div className="timelineNumber">3</div>

                            <div>
                                <h3>Practising INNER JOIN</h3>

                                <p>
                                    I used INNER JOIN to display only students who
                                    had a matching course record. This helped me
                                    understand how PostgreSQL combines related rows.
                                </p>
                            </div>
                        </article>

                        <article className="lllpFourTimelineItem">
                            <div className="timelineNumber">4</div>

                            <div>
                                <h3>Comparing LEFT JOIN</h3>

                                <p>
                                    I used LEFT JOIN to display every student,
                                    including students who did not have a matching
                                    course. Their course value appeared as null.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="lllpFourPracticeSection">
                <div className="lllpPageContainer">
                    <div className="lllpFourPracticeLayout">
                        <div className="lllpFourPracticeText">
                            <span>Practice Example</span>

                            <h2>Connecting Students and Courses</h2>

                            <p>
                                I used the student_id column to create a
                                relationship between the students and courses
                                tables. PostgreSQL compared the matching values
                                when I ran the JOIN query.
                            </p>

                            <div className="lllpFourKeyNotes">
                                <div>
                                    <strong>Primary Key</strong>
                                    <p>Uniquely identifies a row.</p>
                                </div>

                                <div>
                                    <strong>Foreign Key</strong>
                                    <p>References a row in another table.</p>
                                </div>

                                <div>
                                    <strong>JOIN</strong>
                                    <p>Combines matching information.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lllpFourTerminal">
                            <div className="terminalTopBar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <pre>{`SELECT
    students.name,
    courses.course_name
FROM students
INNER JOIN courses
ON students.student_id = courses.student_id;`}</pre>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpFourCommandsSection">
                <div className="lllpPageContainer">
                    <div className="lllpFourSectionHeading centered">
                        <span>Main Topics Covered</span>
                        <h2>Relationships and JOIN Commands</h2>

                        <p>
                            These were the main PostgreSQL concepts I practised
                            during this session.
                        </p>
                    </div>

                    <div className="lllpFourCommandGrid">
                        <article className="lllpFourCommandCard">
                            <div className="commandCardNumber">01</div>

                            <h3>Primary Key</h3>

                            <p>
                                A primary key gives every record a unique
                                identifier.
                            </p>

                            <pre>{`student_id SERIAL PRIMARY KEY`}</pre>
                        </article>

                        <article className="lllpFourCommandCard">
                            <div className="commandCardNumber">02</div>

                            <h3>Foreign Key</h3>

                            <p>
                                A foreign key connects a column to the primary key
                                of another table.
                            </p>

                            <pre>{`student_id INT
REFERENCES students(student_id)`}</pre>
                        </article>

                        <article className="lllpFourCommandCard">
                            <div className="commandCardNumber">03</div>

                            <h3>INNER JOIN</h3>

                            <p>
                                INNER JOIN returns only rows with matching values
                                in both tables.
                            </p>

                            <pre>{`SELECT students.name,
courses.course_name
FROM students
INNER JOIN courses
ON students.student_id =
courses.student_id;`}</pre>
                        </article>

                        <article className="lllpFourCommandCard">
                            <div className="commandCardNumber">04</div>

                            <h3>LEFT JOIN</h3>

                            <p>
                                LEFT JOIN returns every row from the first table,
                                even when no matching row exists.
                            </p>

                            <pre>{`SELECT students.name,
courses.course_name
FROM students
LEFT JOIN courses
ON students.student_id =
courses.student_id;`}</pre>
                        </article>
                    </div>
                </div>
            </section>

            <section className="lllpFourScreenshotsSection">
                <div className="lllpPageContainer">
                    <div className="lllpFourSectionHeading centered">
                        <span>Evidence of Learning</span>
                        <h2>Study Screenshots</h2>

                        <p>
                            These screenshots show the resource I used and the
                            practical JOIN queries I completed.
                        </p>
                    </div>

                    <div className="lllpFourScreenshotList">
                        <article className="lllpFourScreenshotRow">
                            <div className="lllpFourScreenshotImage">
                                <a
                                    href="https://www.w3schools.com/sql/sql_join.asp"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={learningResource}
                                        alt="SQL joins learning resource"
                                    />
                                </a>
                            </div>

                            <div className="lllpFourScreenshotText">
                                <span>Screenshot 01</span>
                                <h3>Learning About SQL JOINs</h3>

                                <p>
                                    I used this online resource to understand how
                                    JOIN commands combine information from related
                                    database tables.
                                </p>

                                <a
                                    href="https://www.w3schools.com/sql/sql_join.asp"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View learning resource
                                </a>
                            </div>
                        </article>

                        <article className="lllpFourScreenshotRow reverse">
                            <div className="lllpFourScreenshotImage">
                                <img
                                    src={innerJoinScreenshot}
                                    alt="PostgreSQL INNER JOIN query and result"
                                />
                            </div>

                            <div className="lllpFourScreenshotText">
                                <span>Screenshot 02</span>
                                <h3>INNER JOIN Practice</h3>

                                <p>
                                    I used INNER JOIN to display students with
                                    matching course records. Only rows connected in
                                    both tables appeared in the result.
                                </p>
                            </div>
                        </article>

                        <article className="lllpFourScreenshotRow">
                            <div className="lllpFourScreenshotImage">
                                <img
                                    src={leftJoinScreenshot}
                                    alt="PostgreSQL LEFT JOIN query and result"
                                />
                            </div>

                            <div className="lllpFourScreenshotText">
                                <span>Screenshot 03</span>
                                <h3>LEFT JOIN Practice</h3>

                                <p>
                                    I used LEFT JOIN to show all students. Students
                                    without a matching course still appeared, with
                                    a null course value.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="lllpFourReflectionSection">
                <div className="lllpPageContainer">
                    <div className="lllpFourReflectionCard">
                        <div>
                            <span>Reflection</span>
                            <h2>What I Learned About Myself</h2>
                        </div>

                        <div className="lllpFourReflectionText">
                            <p>
                                This session showed me that database relationships
                                require more planning than basic SQL commands. I
                                understood the JOIN queries better after looking at
                                the columns and identifying which keys connected
                                the tables.
                            </p>

                            <p>
                                INNER JOIN and LEFT JOIN initially looked similar,
                                but comparing their results helped me understand the
                                difference. INNER JOIN only returned matching
                                records, while LEFT JOIN kept every record from the
                                students table.
                            </p>

                            <p>
                                I learned that visual examples and practical queries
                                are the most effective learning methods for me. I am
                                motivated to continue because relationships and
                                joins are important for real websites, customer
                                systems, inventories, and data applications.
                            </p>

                            <div className="sourceLinks">
                                <a
                                    href="https://www.postgresql.org/docs/current/tutorial-join.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    PostgreSQL JOIN Tutorial
                                </a>

                                <a
                                    href="https://www.w3schools.com/sql/sql_join.asp"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    W3Schools SQL JOIN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

