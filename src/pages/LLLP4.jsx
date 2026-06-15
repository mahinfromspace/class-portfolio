import Main from '../components/Main'


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
                                        For my fourth LLLP page, I learned how database tables can be connected using relationships and joins.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lllpOneGlassWrapper heroIntroGlass">
                            <div className="lllpOneHeader">
                                <span>Hours 7-8</span>
                                <h2>Relationships and Joins</h2>
                                <p>
                                    In this session, I studied how two tables can connect with each other. I learned about primary keys, foreign keys, one-to-many relationships, INNER JOIN, and LEFT JOIN.
                                </p>
                            </div>

                            <div className="row g-4 align-items-stretch">
                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>What I Studied</h3>
                                        <p>
                                            I studied how one table can store main information and another table can store related information. For example, one students table can connect to another courses table.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>My Experience</h3>
                                        <p>
                                            Joins were harder than basic commands because I had to think about two tables at the same time. However, after seeing examples, I understood why joins are important in real databases.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="lllpOneLearningSection lllpFourPracticeSection">
                <div className="lllpPageContainer">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                            <div className="lllpOneContentBlock">
                                <span>Learning Process</span>
                                <h2>My Hours 7-8</h2>
                                <p>
                                    During this session, I learned that real databases usually do not keep all information in one big table. Instead, data is separated into different tables and connected using keys.
                                </p>
                                <p>
                                    I practiced simple examples using a students table and a courses table. This helped me understand how related data can be combined using JOIN commands.
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

                                <h3>Practice Example</h3>

                                <pre>{`SELECT students.name, courses.course_name
FROM students
INNER JOIN courses
ON students.id = courses.student_id;`}</pre>

                                <p>
                                    This query connects two tables and shows student names with their course names.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneTopicsSection lllpFourCommandsSection">
                <div className="lllpPageContainer">
                    <div className="lllpOneHeader">
                        <span>Main Topics Covered</span>
                        <h2>Relationships and Joins I Learned</h2>
                        <p>
                            I focused on how tables connect and how data can be combined from more than one table.
                        </p>
                    </div>

                    <div className="simpleCommandGrid">
                        <div className="simpleCommandCard">
                            <h3>Primary Key</h3>
                            <p>
                                I learned that a primary key uniquely identifies each row in a table.
                            </p>

                            <pre>{`id SERIAL PRIMARY KEY`}</pre>
                        </div>

                        <div className="simpleCommandCard">
                            <h3>Foreign Key</h3>
                            <p>
                                I learned that a foreign key connects one table to another table.
                            </p>

                            <pre>{`student_id INT REFERENCES students(id)`}</pre>
                        </div>

                        <div className="simpleCommandCard">
                            <h3>JOIN</h3>
                            <p>
                                I learned that JOIN is used to combine related data from two tables.
                            </p>

                            <pre>{`SELECT *
FROM students
INNER JOIN courses
ON students.id = courses.student_id;`}</pre>
                        </div>
                    </div>

                    <div className="commandExplanationBox">
                        <h3>How Tables Connect</h3>
                        <p>
                            Overall, I learned that relationships make databases more organized. Instead of putting all information in one table, we can divide the data into separate tables and connect them using keys.
                        </p>
                        <p>
                            A <strong>primary key</strong> identifies each record, and a <strong>foreign key</strong> connects one table to another. Then <strong>JOIN</strong> helps combine the related information when we need to view it together.
                        </p>
                    </div>
                </div>
            </section>

            <section className="lllpOneScreenshotsSection lllpFourScreenshotsSection">
                <div className="lllpPageContainer">
                    <div className="lllpOneHeader">
                        <span>Evidence of Learning</span>
                        <h2>Screenshots</h2>
                        <p>
                            These screenshots show my practice with connected tables, keys, and joins.
                        </p>
                    </div>

                    <div className="screenshotGrid">
                        <div className="screenshotPlaceholder small">
                            <img src={ScreenshotOne} alt="Primary key and foreign key practice" className="img-fluid" />
                        </div>

                        <div className="screenshotPlaceholder small">
                            <img src={ScreenshotTwo} alt="INNER JOIN practice" className="img-fluid" />
                        </div>

                        <div className="screenshotPlaceholder small">
                            <img src={ScreenshotThree} alt="LEFT JOIN practice" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneReflectionSection lllpFourReflectionSection">
                <div className="lllpPageContainer">
                    <div className="reflectionGlassCard">
                        <span>Reflection</span>
                        <h2>What I Learned About Myself</h2>

                        <p>
                            In this session, I learned that database relationships are important for building real applications. Joins were more difficult than the previous SQL commands, but they helped me understand how real systems manage connected data.
                        </p>

                        <p>
                            I also learned that I need to draw or imagine the table structure before writing JOIN queries. This makes the logic easier to understand.
                        </p>

                        <div className="sourceLinks">
                            <a href="https://www.postgresql.org/docs/" target="_blank" rel="noreferrer">
                                PostgreSQL Documentation
                            </a>

                            <a href="https://www.w3schools.com/sql/sql_join.asp" target="_blank" rel="noreferrer">
                                W3Schools SQL Joins
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}