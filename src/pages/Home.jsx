import Main from '../components/Main'
import TreeLogo from '../assets/tree.png'

export default function () {
    return (
        <section className="heroSection">
            <Main>
                <div className="row heroMainPart d-flex justify-content-around align-items-center">
                    <div className="col-md-7">
                        <div className="heroText">
                            <h1>
                                A class portfolio documenting my learning journey, projects, presentations, posters, and my Lifelong Learning Project on PostgreSQL.
                            </h1>
                            <p>
                                Created to track my growth, organize my coursework, and reflect on the skills I develop during the semester.
                            </p>
                            <button>Start Exploring</button>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={TreeLogo} alt="" />
                    </div>
                </div>
            </Main>
        </section>
    )
}