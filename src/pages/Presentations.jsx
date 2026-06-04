import Main from '../components/Main'
import { Link } from 'react-router-dom'

export default function Presentations() {
    return (
        <section className="heroSection">
            <Main>
                <div className="row heroMainPart d-flex justify-content-around align-items-center">
                    <div className="col-md-10">
                        <div className="heroText">
                            <h1>Presentations</h1>
                            <p>
                                This page includes my presentation assignments for this class. Each presentation page shows my work, topic, and learning progress during the course.
                            </p>

                            <div className="presentationHeroLinks">
                                <Link to="/presentations/1" className="presentationHeroButton">
                                    View Presentation #1
                                </Link>

                                <Link to="/presentations/2" className="presentationHeroButton">
                                    View Presentation #2
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </section>
    )
}