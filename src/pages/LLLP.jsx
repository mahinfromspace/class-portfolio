import Main from '../components/Main'

export default function () {
    return (
        <section className="heroSection">
            <Main>
                <div className="row heroMainPart d-flex justify-content-around align-items-center">
                    <div className="col-md-10">
                        <div className="heroText">
                            <h1>LLLP</h1>
                            <p>
                                My Lifelong Learning Project is about learning PostgreSQL and reflecting on my progress throughout the semester.
                            </p>
                        </div>
                    </div>
                </div>
            </Main>
        </section>
    )
}