import Main from '../components/Main'

import Poster2Rough from '../assets/poster2-rough.png'
import Poster2Final from '../assets/poster2-final.png'
import Poster2Palette from '../assets/poster2-color-palette.png'

export default function Poster2() {
    return (
        <>
            <section className="heroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText posterHeroText">
                                <span className="posterLabel">Poster #2</span>
                                <h1>BLUE 2026 Event Poster</h1>
                                <p>
                                    This page shows my rough draft, final draft, color scheme, and design reflection for my ocean awareness event poster.
                                </p>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="posterProjectSection oceanPosterSection">
                <div className="posterPageContainer">
                    <div className="posterSectionHeader">
                        <span>Event Poster</span>
                        <h2>BLUE 2026</h2>
                        <p>
                            BLUE 2026 is a fictional ocean awareness event focused on cleanup, art, and recycling at Tokyo Bay.
                        </p>
                    </div>

                    <div className="posterImageGrid">
                        <div className="posterDisplayCard">
                            <div className="posterCardText">
                                <span>Rough Draft</span>
                                <h3>Poster #2 Rough Draft</h3>
                            </div>
                            <img src={Poster2Rough} alt="Poster 2 rough draft" />
                        </div>

                        <div className="posterDisplayCard featuredPosterCard">
                            <div className="posterCardText">
                                <span>Final Draft</span>
                                <h3>Poster #2 Final Draft</h3>
                            </div>
                            <img src={Poster2Final} alt="Poster 2 final draft" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="posterPaletteSection oceanPaletteSection">
                <div className="posterPageContainer">
                    <div className="posterTwoColumn">
                        <div className="posterReflectionCard">
                            <span>Write-Up</span>
                            <h2>Design Choices and Drafting Changes</h2>
                            <p>
                                For Poster #2, I first created a coding bootcamp event poster, but later changed the idea to an ocean awareness event called BLUE 2026. I made this change because the ocean theme gave me a stronger and more creative visual direction. In the final draft, I used blue tones, wave shapes, and a large starfish outline to create a calm underwater feeling. I placed the event name at the top in large typography so it becomes the main focus, and I used the small information card in the center to show the date, time, and location clearly. Compared to the rough draft, the final poster has better visual hierarchy, more balance, stronger color harmony, clearer alignment, and better use of negative space.
                            </p>
                        </div>

                        <div className="posterPaletteCard">
                            <span>Color Scheme</span>
                            <h2>Color Palette Screenshot</h2>
                            <img src={Poster2Palette} alt="Poster 2 color scheme screenshot" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}