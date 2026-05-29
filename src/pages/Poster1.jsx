import Main from '../components/Main'

import Poster1Rough from '../assets/poster1-rough.png'
import Poster1Final from '../assets/poster1-final.png'
import Poster1Palette from '../assets/poster1-color-palette.png'

export default function Poster1() {
    return (
        <>
            <section className="heroSection posterHeroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText posterHeroText">
                                <span className="posterLabel">Poster #1</span>
                                <h1>Cyber Security Awareness Poster</h1>
                                <p>
                                    This page shows my rough draft, final draft, color scheme, and design reflection for my SQL Injection poster.
                                </p>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="posterProjectSection">
                <div className="posterPageContainer">
                    <div className="posterSectionHeader">
                        <span>Drafting Process</span>
                        <h2>SQL Injection Poster</h2>
                        <p>
                            This poster explains SQL Injection as a cyberattack and shows how attackers can use harmful commands to target website databases.
                        </p>
                    </div>

                    <div className="posterImageGrid">
                        <div className="posterDisplayCard">
                            <div className="posterCardText">
                                <span>Rough Draft</span>
                                <h3>Poster #1 Rough Draft</h3>
                            </div>
                            <img src={Poster1Rough} alt="Poster 1 rough draft" />
                        </div>

                        <div className="posterDisplayCard featuredPosterCard">
                            <div className="posterCardText">
                                <span>Final Draft</span>
                                <h3>Poster #1 Final Draft</h3>
                            </div>
                            <img src={Poster1Final} alt="Poster 1 final draft" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="posterPaletteSection">
                
                <div className="posterPageContainer">
                    <div className="posterTwoColumn">
                        <div className="posterReflectionCard">
                            <span>Write-Up</span>
                            <h2>Design Choices and Drafting Changes</h2>
                            <p>
                                For Poster #1, I designed a cybersecurity awareness poster about SQL Injection. In my rough draft, I used a simple layout with separate text boxes and small icons to explain the topic. During the drafting process, I changed the final poster to have a stronger visual hierarchy by making the title much larger and placing it near the top-left area. I also added a large hacker illustration to make the cyberattack theme easier to understand. The final version uses better contrast, stronger typography, improved alignment, and repeated information boxes to make the content more organized. I also reduced the crowded feeling from the rough draft by using clearer spacing and a more balanced layout.
                            </p>
                        </div>

                        <div className="posterPaletteCard">
                            <span>Color Scheme</span>
                            <h2>Color Palette Screenshot</h2>
                            <img src={Poster1Palette} alt="Poster 1 color scheme screenshot" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}