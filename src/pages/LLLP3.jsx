import Main from '../components/Main'

export default function () {
    return (
        <>
            <section className="heroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText">
                                <h1>LLLP #3</h1>
                                <p>
                                    This page will show my practice work, examples, and what I learned while using PostgreSQL.
                                </p>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="lllpWhiteSection">
                <div className="container">
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-md-6">
                            <h2>What I Learned</h2>
                            <ul>
                                <li>PostgreSQL is used to store, organize, and manage data.</li>
                                <li>SQL queries help us retrieve specific information from tables.</li>
                                <li>Tables, rows, and columns are important parts of a database.</li>
                                <li>Learning PostgreSQL can help me in future data and web projects.</li>
                            </ul>
                        </div>

                        <div className="col-md-5">
                            <img
                                src="https://picsum.photos/600/400"
                                alt="Learning PostgreSQL"
                                className="lllpWhiteImage"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}