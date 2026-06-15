import Main from '../components/Main'

import ScreenshotOne from '../assets/lllp5-ss1.png'
import ScreenshotTwo from '../assets/lllp5-ss2.png'
import ScreenshotThree from '../assets/lllp5-ss3.png'

const journeySteps = [
    {
        number: '01',
        title: 'Getting Started',
        session: 'LLLP #1',
        description:
            'I learned what PostgreSQL is, why databases are important, and how PostgreSQL can support websites, applications, data systems, and future technology projects.'
    },
    {
        number: '02',
        title: 'Learning SQL Basics',
        session: 'LLLP #2',
        description:
            'I practised creating tables, inserting records, selecting data, and understanding how rows and columns are structured inside a relational database.'
    },
    {
        number: '03',
        title: 'Controlling Data',
        session: 'LLLP #3',
        description:
            'I learned how to filter, sort, search, and limit database results using WHERE, AND, OR, ORDER BY, LIKE, BETWEEN, and LIMIT.'
    },
    {
        number: '04',
        title: 'Connecting Tables',
        session: 'LLLP #4',
        description:
            'I explored primary keys, foreign keys, relationships, INNER JOIN, and LEFT JOIN to understand how real databases connect related information.'
    },
    {
        number: '05',
        title: 'Building Something',
        session: 'LLLP #5',
        description:
            'I combined everything I learned into a small product inventory database and reflected on how PostgreSQL can become part of my future development stack.'
    }
]

export default function LLLP5() {
    return (
        <>
            <section className="heroSection lllpOneHero lllpFiveHero">
                <Main>
                    <div className="lllpHeroContent">
                        <div className="row heroMainPart d-flex justify-content-around align-items-center">
                            <div className="col-md-10">
                                <div className="heroText lllpOneHeroText lllpFiveHeroText">
                                    <span className="lllpFiveFinalLabel">
                                        Final Chapter · Hours 9–10
                                    </span>

                                    <h1>LLLP #5</h1>

                                    <p>
                                        We finally made it. After ten hours of learning,
                                        practising, making mistakes, and improving, I
                                        completed my PostgreSQL learning journey with a
                                        small database project and a clearer direction
                                        for my future.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lllpOneGlassWrapper heroIntroGlass lllpFiveHeroGlass">
                            <div className="lllpOneHeader">
                                <span>Final Session</span>

                                <h2>From First Query to Future Possibilities</h2>

                                <p>
                                    This final session was not only about completing a
                                    mini project. It was about connecting everything I
                                    studied and understanding how PostgreSQL can support
                                    the websites, applications, and digital products I
                                    want to build in the future.
                                </p>
                            </div>

                            <div className="row g-4 align-items-stretch">
                                <div className="col-md-4">
                                    <div className="lllpOneGlassCard lllpFiveHeroCard">
                                        <span>01</span>
                                        <h3>What I Built</h3>

                                        <p>
                                            I created a small product inventory database
                                            that stores product names, categories,
                                            prices, and stock information.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="lllpOneGlassCard lllpFiveHeroCard">
                                        <span>02</span>
                                        <h3>What I Achieved</h3>

                                        <p>
                                            I moved from understanding simple database
                                            ideas to creating tables, filtering data,
                                            sorting records, and connecting related
                                            information.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="lllpOneGlassCard lllpFiveHeroCard">
                                        <span>03</span>
                                        <h3>What Comes Next</h3>

                                        <p>
                                            I want to continue learning database design
                                            and connect PostgreSQL to my React, Node.js,
                                            and Express web development stack.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="lllpFiveCelebrationSection">
                <div className="lllpPageContainer">
                    <div className="lllpFiveCelebrationContent">
                        <span className="lllpFiveBigNumber">10</span>

                        <div>
                            <span className="lllpFiveSectionLabel">
                                Ten Hours Completed
                            </span>

                            <h2>We Finally Made It</h2>

                            <p>
                                At the beginning of this project, PostgreSQL was only
                                the name of a database technology to me. Now I understand
                                how data can be stored, organized, filtered, connected,
                                and used inside a real application.
                            </p>

                            <p>
                                Ten hours is only the beginning, but this project gave me
                                a strong foundation and proved that I can learn a
                                technical subject step by step when I combine reading,
                                practice, screenshots, reflection, and small projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpFiveJourneySection">
                <div className="lllpPageContainer">
                    <div className="lllpFiveSectionHeading">
                        <span>Complete Learning Journey</span>
                        <h2>From LLLP #1 to LLLP #5</h2>

                        <p>
                            Each session added a new layer to my PostgreSQL knowledge.
                            Together, they created a clear progression from basic
                            database concepts to a practical mini project.
                        </p>
                    </div>

                    <div className="lllpFiveJourneyLine">
                        {journeySteps.map(step => (
                            <article
                                className="lllpFiveJourneyItem"
                                key={step.number}
                            >
                                <div className="lllpFiveJourneyNumber">
                                    {step.number}
                                </div>

                                <div className="lllpFiveJourneyCard">
                                    <span>{step.session}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lllpFiveProjectSection">
                <div className="lllpPageContainer">
                    <div className="lllpFiveProjectLayout">
                        <div className="lllpFiveProjectText">
                            <span className="lllpFiveSectionLabel">
                                Final Mini Project
                            </span>

                            <h2>Product Inventory Database</h2>

                            <p>
                                For my final practical task, I created a small product
                                inventory database. The purpose of this database was to
                                show how a business could store and manage product
                                information.
                            </p>

                            <p>
                                I added product names, categories, prices, and stock
                                amounts. I then used SQL queries to find products with
                                enough stock and arrange them by price.
                            </p>

                            <div className="lllpFiveProjectPoints">
                                <div>
                                    <strong>Structured storage</strong>
                                    <span>Products were organized into columns.</span>
                                </div>

                                <div>
                                    <strong>Useful filtering</strong>
                                    <span>
                                        WHERE helped find products based on stock.
                                    </span>
                                </div>

                                <div>
                                    <strong>Organized output</strong>
                                    <span>
                                        ORDER BY arranged products by price.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="lllpFiveTerminal">
                            <div className="terminalTopBar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="lllpFiveTerminalLabel">
                                inventory_project.sql
                            </div>

                            <pre>{`CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(50),
    price INT,
    stock INT
);

INSERT INTO products
    (name, category, price, stock)
VALUES
    ('Milk', 'Drink', 180, 20),
    ('Bread', 'Food', 220, 8),
    ('Coffee', 'Drink', 500, 15);

SELECT *
    FROM products
WHERE stock > 10
ORDER BY price ASC; `}</pre>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpFiveSkillsSection">
                <div className="lllpPageContainer">
                    <div className="lllpFiveSectionHeading centered">
                        <span>Skills Developed</span>
                        <h2>What I Can Do Now</h2>

                        <p>
                            This project gave me a practical starting point for working
                            with relational databases.
                        </p>
                    </div>

                    <div className="lllpFiveSkillsGrid">
                        <article className="lllpFiveSkillCard">
                            <span>01</span>
                            <h3>Create Database Tables</h3>
                            <p>
                                I can define columns, choose simple data types, and use
                                primary keys to identify records.
                            </p>
                        </article>

                        <article className="lllpFiveSkillCard">
                            <span>02</span>
                            <h3>Add and Retrieve Data</h3>
                            <p>
                                I can insert information and retrieve records using
                                SELECT statements.
                            </p>
                        </article>

                        <article className="lllpFiveSkillCard">
                            <span>03</span>
                            <h3>Filter and Sort Results</h3>
                            <p>
                                I can use conditions, ranges, patterns, sorting, and
                                limits to control query output.
                            </p>
                        </article>

                        <article className="lllpFiveSkillCard">
                            <span>04</span>
                            <h3>Connect Related Tables</h3>
                            <p>
                                I understand the basic purpose of keys, relationships,
                                INNER JOIN, and LEFT JOIN.
                            </p>
                        </article>

                        <article className="lllpFiveSkillCard">
                            <span>05</span>
                            <h3>Think About Data Structure</h3>
                            <p>
                                I can begin planning how information should be separated
                                and organized before building an application.
                            </p>
                        </article>

                        <article className="lllpFiveSkillCard">
                            <span>06</span>
                            <h3>Build Small Database Projects</h3>
                            <p>
                                I can combine several SQL ideas into a small practical
                                project instead of practising isolated commands.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="lllpFiveScreenshotsSection">
                <div className="lllpPageContainer">
                    <div className="lllpFiveSectionHeading centered">
                        <span>Evidence of Learning</span>
                        <h2>Final Project Screenshots</h2>

                        <p>
                            These screenshots show the database structure, inserted
                            product data, and the final filtered query result.
                        </p>
                    </div>

                    <div className="lllpFiveScreenshotGrid">
                        <article className="lllpFiveScreenshotCard">
                            <div className="lllpFiveScreenshotNumber">01</div>

                            <img
                                src={ScreenshotOne}
                                alt="Creating the products table"
                            />

                            <div>
                                <h3>Creating the Product Table</h3>
                                <p>
                                    I created the products table with a primary key and
                                    columns for product name, category, price, and stock.
                                </p>
                            </div>
                        </article>

                        <article className="lllpFiveScreenshotCard">
                            <div className="lllpFiveScreenshotNumber">02</div>

                            <img
                                src={ScreenshotTwo}
                                alt="Inserting product data"
                            />

                            <div>
                                <h3>Adding Product Records</h3>
                                <p>
                                    I inserted several sample products to create enough
                                    data for filtering and sorting practice.
                                </p>
                            </div>
                        </article>

                        <article className="lllpFiveScreenshotCard">
                            <div className="lllpFiveScreenshotNumber">03</div>

                            <img
                                src={ScreenshotThree}
                                alt="Final product query result"
                            />

                            <div>
                                <h3>Final Query Result</h3>
                                <p>
                                    I filtered products based on stock and sorted the
                                    final results by price.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="lllpFiveStackSection">
                <div className="lllpPageContainer">
                    <div className="lllpFiveStackCard">
                        <div className="lllpFiveStackIntro">
                            <span className="lllpFiveSectionLabel">
                                Connecting to My Future
                            </span>

                            <h2>PostgreSQL and My Web Development Stack</h2>

                            <p>
                                Until now, much of my web development learning has
                                focused on the front end. I have used HTML, CSS,
                                JavaScript, React, and Vite to build interfaces and
                                interactive experiences.
                            </p>

                            <p>
                                PostgreSQL introduces the data layer. It helps me
                                understand what happens behind the interface when users
                                create accounts, add products, submit forms, save quiz
                                results, manage customers, or update information.
                            </p>
                        </div>

                        <div className="lllpFiveStackFlow">
                            <div className="lllpFiveStackNode">
                                <span>Frontend</span>
                                <strong>React</strong>
                            </div>

                            <div className="lllpFiveStackArrow">→</div>

                            <div className="lllpFiveStackNode">
                                <span>Backend</span>
                                <strong>Node + Express</strong>
                            </div>

                            <div className="lllpFiveStackArrow">→</div>

                            <div className="lllpFiveStackNode active">
                                <span>Database</span>
                                <strong>PostgreSQL</strong>
                            </div>
                        </div>

                        <p className="lllpFiveStackConclusion">
                            Learning PostgreSQL helps transform my projects from static
                            front-end pages into complete systems that can store,
                            retrieve, update, and organize real user data.
                        </p>
                    </div>
                </div>
            </section>

            <section className="lllpFiveFutureSection">
                <div className="lllpPageContainer">
                    <div className="lllpFiveFutureLayout">
                        <div className="lllpFiveFutureHeading">
                            <span>My Next Chapter</span>
                            <h2>This Is Not the End</h2>
                        </div>

                        <div className="lllpFiveFutureText">
                            <p>
                                Completing this LLLP does not mean that I have finished
                                learning databases. It means that I now have a strong
                                starting point.
                            </p>

                            <p>
                                My next goal is to continue practising PostgreSQL while
                                learning backend development with Node.js and Express. I
                                want to connect a React interface to an API and then save
                                application data inside PostgreSQL.
                            </p>

                            <p>
                                In the future, I want to create complete projects such
                                as customer-management systems, inventory applications,
                                dashboards, user-authentication systems, and business
                                tools. PostgreSQL can become the foundation that stores
                                and connects the information behind those products.
                            </p>

                            <p>
                                This project also taught me something important about
                                myself: I do not need to understand everything at once.
                                I learn best when I divide a difficult topic into small
                                steps, practise each step, and then connect the pieces
                                through a project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpFiveFinalSection">
                <div className="lllpPageContainer">
                    <div className="lllpFiveFinalCard">
                        <span className="lllpFiveFinalGlow"></span>

                        <p className="lllpFiveFinalSmall">
                            Lifelong Learning Project Completed
                        </p>

                        <h2>One Journey Finished.<br />A Bigger One Begins.</h2>

                        <p>
                            I started with a simple question: what is PostgreSQL? I
                            finished with a better understanding of databases, a
                            working mini project, and a clearer idea of how data can
                            support my future as a web developer.
                        </p>

                        <strong>
                            Ten hours completed. Five sessions documented. One new
                            foundation built.
                        </strong>

                        <div className="sourceLinks">
                            <a
                                href="https://www.postgresql.org/docs/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                PostgreSQL Documentation
                            </a>

                            <a
                                href="https://www.w3schools.com/postgresql/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                W3Schools PostgreSQL
                            </a>

                            <a
                                href="https://www.youtube.com/watch?v=qw--VYLpxG4&t=43s"
                                target="_blank"
                                rel="noreferrer"
                            >
                                PostgreSQL Video Resource
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
