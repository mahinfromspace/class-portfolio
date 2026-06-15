import Main from '../components/Main'


export default function LLLP5() {
    return (
        <>
            <section className="heroSection lllpOneHero lllpFiveHero">
                <Main>
                    <div className="lllpHeroContent">
                        <div className="row heroMainPart d-flex justify-content-around align-items-center">
                            <div className="col-md-10">
                                <div className="heroText lllpOneHeroText">
                                    <h1>LLLP #5</h1>
                                    <p>
                                        For my final LLLP page, I created a small PostgreSQL mini project and reflected on my full learning experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lllpOneGlassWrapper heroIntroGlass">
                            <div className="lllpOneHeader">
                                <span>Hours 9-10</span>
                                <h2>Mini Project and Final Reflection</h2>
                                <p>
                                    In this session, I used what I learned from PostgreSQL to create a small database project. I practiced creating tables, adding data, filtering results, and viewing useful information.
                                </p>
                            </div>

                            <div className="row g-4 align-items-stretch">
                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>Mini Project Idea</h3>
                                        <p>
                                            I made a simple product inventory database. This type of database can be useful for a small shop because it can store product names, categories, prices, and stock amounts.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="lllpOneGlassCard">
                                        <h3>My Experience</h3>
                                        <p>
                                            This final session helped me connect all the previous lessons. I could understand how basic commands, filtering, and table structure can work together in a small real-world example.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="lllpOneLearningSection lllpFivePracticeSection">
                <div className="lllpPageContainer">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                            <div className="lllpOneContentBlock">
                                <span>Learning Process</span>
                                <h2>My Hours 9-10</h2>
                                <p>
                                    During this session, I created a small database table for products. I added sample data and practiced selecting products by category and stock amount.
                                </p>
                                <p>
                                    I also reviewed what I learned from the full 10 hours. I now understand the basic purpose of PostgreSQL and how SQL commands are used to manage data.
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

                                <h3>Mini Project Example</h3>

                                <pre>{`CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(50),
    price INT,
    stock INT
);`}</pre>

                                <p>
                                    This table stores product information such as name, category, price, and stock.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneTopicsSection lllpFiveCommandsSection">
                <div className="lllpPageContainer">
                    <div className="lllpOneHeader">
                        <span>Mini Project</span>
                        <h2>Product Inventory Database</h2>
                        <p>
                            I used a small product inventory idea to practice what I learned during my PostgreSQL study.
                        </p>
                    </div>

                    <div className="simpleCommandGrid">
                        <div className="simpleCommandCard">
                            <h3>Create Table</h3>
                            <p>
                                I created a products table to store product information.
                            </p>

                            <pre>{`CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(50),
    price INT,
    stock INT
);`}</pre>
                        </div>

                        <div className="simpleCommandCard">
                            <h3>Add Data</h3>
                            <p>
                                I inserted sample product data into the table.
                            </p>

                            <pre>{`INSERT INTO products
(name, category, price, stock)
VALUES
('Milk', 'Drink', 180, 20);`}</pre>
                        </div>

                        <div className="simpleCommandCard">
                            <h3>View Results</h3>
                            <p>
                                I used SELECT and WHERE to find useful information from the table.
                            </p>

                            <pre>{`SELECT * FROM products
WHERE stock > 10
ORDER BY price ASC;`}</pre>
                        </div>
                    </div>

                    <div className="commandExplanationBox">
                        <h3>What I Overall Did</h3>
                        <p>
                            Overall, I created a small database project using PostgreSQL. First, I made a table for products. Then I added product data, such as name, category, price, and stock. After that, I used SELECT, WHERE, and ORDER BY to view and organize the data.
                        </p>
                        <p>
                            This mini project helped me understand how PostgreSQL can be used in real applications. For example, a small shop or website could use a database like this to manage products and inventory.
                        </p>
                    </div>
                </div>
            </section>

            <section className="lllpOneScreenshotsSection lllpFiveScreenshotsSection">
                <div className="lllpPageContainer">
                    <div className="lllpOneHeader">
                        <span>Evidence of Learning</span>
                        <h2>Screenshots</h2>
                        <p>
                            These screenshots show my mini project table, inserted data, and final query results.
                        </p>
                    </div>

                    <div className="screenshotGrid">
                        <div className="screenshotPlaceholder small">
                            <img src={ScreenshotOne} alt="Product table creation screenshot" className="img-fluid" />
                        </div>

                        <div className="screenshotPlaceholder small">
                            <img src={ScreenshotTwo} alt="Product data insert screenshot" className="img-fluid" />
                        </div>

                        <div className="screenshotPlaceholder small">
                            <img src={ScreenshotThree} alt="Final query result screenshot" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="lllpOneReflectionSection lllpFiveReflectionSection">
                <div className="lllpPageContainer">
                    <div className="reflectionGlassCard">
                        <span>Final Reflection</span>
                        <h2>What I Learned from This Project</h2>

                        <p>
                            Through this 10-hour Lifelong Learning Project, I learned the basic ideas of PostgreSQL and SQL. At the beginning, I only knew that databases store data. Now I understand how to create tables, insert data, filter results, sort data, and connect ideas together in a small project.
                        </p>

                        <p>
                            I still need more practice, especially with joins and larger database design. However, this project helped me see how PostgreSQL connects with web development, data projects, and future AI-related systems. I think this skill will help me become a stronger developer.
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