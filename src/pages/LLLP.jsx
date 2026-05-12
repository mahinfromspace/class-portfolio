import { useState, useEffect } from 'react'
import Main from '../components/Main'
import PostgreSQL from '../assets/postgresql.jpg'

export default function LLLP() {
    const [selectedResource, setSelectedResource] = useState(null)

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setSelectedResource(null)
            }
        }

        window.addEventListener("keydown", handleEsc)

        return () => {
            window.removeEventListener("keydown", handleEsc)
        }
    }, [])

    const resources = [
        {
            title: "Resource 1",
            name: "PostgreSQL Official Website",
            link: "https://www.postgresql.org/",
            colorClass: "postgresBlock",
            description:
                "The PostgreSQL official website helped me understand what PostgreSQL is and why it is used by many developers and companies."
        },
        {
            title: "Resource 2",
            name: "PostgreSQL Documentation",
            link: "https://www.postgresql.org/docs/",
            colorClass: "docsBlock",
            description:
                "The PostgreSQL documentation is a detailed learning source. I used it to explore database concepts, commands, and technical explanations."
        },
        {
            title: "Resource 3",
            name: "pgAdmin Website",
            link: "https://www.pgadmin.org/",
            colorClass: "pgadminBlock",
            description:
                "pgAdmin is a graphical tool for managing PostgreSQL databases."
        },
        {
            title: "Resource 4",
            name: "YouTube Tutorials",
            link: "https://www.youtube.com/watch?v=qw--VYLpxG4&t=43s",
            colorClass: "youtubeBlock",
            description:
                "I have watched freecodecamp videos to understand the database."
        },
        {
            title: "Resource 5",
            name: "W3Schools SQL Tutorial",
            link: "https://www.w3schools.com/sql/",
            colorClass: "sqlBlock",
            description:
                "W3Schools helped me practice basic SQL commands easily."
        },
    ]

    return (
        <>
            <section className="heroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText">
                                <h1>Lifelong Learning Project: Learning PostgreSQL</h1>
                                <h3 className="introduction">Introduction</h3>

                                <article className="introPara">
                                    <p>
                                        I have chosen PostgreSQL as my Lifelong Learning Project topic. PostgreSQL is an open-source relational database management system used to store, organize, manage, and retrieve data. Many websites and applications use PostgreSQL as their database system. I want to work with websites, data, and Artificial Intelligence in the future, and all of these fields are connected to databases. This motivated me to choose PostgreSQL, one of the most robust and reliable database systems, as the skill I want to learn.
                                    </p>

                                    <p>
                                        PostgreSQL is unique because it works as a strong relational database system while also supporting some features that are useful for non-relational data. This makes it flexible for different types of projects. To learn PostgreSQL, I made a strategy to begin with the basic understanding of databases first. After that, I will study the main concepts of PostgreSQL itself. Gradually, I will learn the syntax, practice SQL commands, understand how data is managed, and explore important topics such as database security and reliability.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="lllpGreenGlassSection">
                <div className="container">
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-md-6 learning-goal glassGoalCard">
                            <h2>My Learning Goal</h2>
                            <h5>By the end of my 10 hours of study, I hope to be able to:</h5>

                            <ul>
                                <li>Understand what PostgreSQL is and why it is useful.</li>
                                <li>Create a database and tables.</li>
                                <li>Use basic SQL commands such as CREATE, INSERT, SELECT, UPDATE, and DELETE.</li>
                                <li>Filter and sort data.</li>
                                <li>Understand primary keys and foreign keys.</li>
                                <li>Practice simple joins.</li>
                                <li>Create a small mini database project.</li>
                            </ul>
                        </div>

                        <div className="col-md-5">
                            <div className="glassImageFrame">
                                <img
                                    src={PostgreSQL}
                                    alt="Learning PostgreSQL"
                                    className="lllpWhiteImage"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="resourcesSection">
                <div className="container">
                    <div className="resourcesHeader">
                        <h2>Learning Resources</h2>
                        <p>
                            These are the main resources I will use to learn PostgreSQL during my Lifelong Learning Project.
                        </p>
                    </div>

                    <div className="resourcesGrid">
                        {resources.map((resource, index) => (
                            <div
                                key={index}
                                className={`resourceCard ${resource.colorClass}`}
                                onClick={() => setSelectedResource(resource)}
                            >
                                <h4>{resource.title}</h4>
                                <h3>{resource.name}</h3>
                                <p>Click to view details</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedResource && (
                <div
                    className="resourceOverlay"
                    onClick={() => setSelectedResource(null)}
                >
                    <div
                        className={`resourceBigCard ${selectedResource.colorClass}`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="closeResource"
                            onClick={() => setSelectedResource(null)}
                            aria-label="Close resource popup"
                        >
                            ×
                        </button>

                        <div className="resourceLeft">
                            <h4>{selectedResource.title}</h4>
                            <h2>{selectedResource.name}</h2>
                        </div>

                        <div className="resourceRight">
                            <h3>About This Source</h3>
                            <p>{selectedResource.description}</p>

                            {selectedResource.link !== "#" && (
                                <a
                                    href={selectedResource.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="resourceButton"
                                >
                                    Visit Source
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}