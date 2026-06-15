import Main from '../components/Main'

export default function DataProject1() {
    const sheetUrl =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSfMxA2F_PEYMW9nKsoaIiTStCxEOSJzUbrCBx28K_AIdwlSwIB4pccx_5e-QjuwVY-Fy82q4craNmx/pubhtml?widget=true&headers=false'

    return (
        <>
            <section className="dataProjectHeroSection">
                <Main>
                    <div className="dataProjectHeroContent">
                        <span className="dataProjectLabel">
                            Data Project #1
                        </span>

                        <h1>
                            Screen-Time
                            <br />
                            Usage Analysis
                        </h1>

                        <p>
                            In this project, I collected and analyzed one week of
                            combined smartphone and laptop screen-time data. I used
                            Google Sheets to organize the information, calculate
                            totals and averages, and visualize my app usage patterns.
                        </p>

                        <a
                            href={sheetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dataProjectButton"
                        >
                            Open Google Sheet
                        </a>
                    </div>
                </Main>
            </section>

            <section className="dataSheetSection">
                <div className="dataProjectContentContainer">
                    <div className="dataSectionHeader">
                        <span>My Spreadsheet</span>

                        <h2>Screen-Time Data and Charts</h2>

                        <p>
                            The spreadsheet contains my daily screen time, weekly
                            totals, average usage, a pie chart showing app usage
                            percentages, and a line chart comparing my top three apps.
                        </p>
                    </div>

                    <div className="dataSheetGlassCard">
                        <div className="sheetTopBar">
                            <div className="sheetDots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <p>Google Sheets — Data Project #1</p>
                        </div>

                        <div className="sheetEmbed">
                            <iframe
                                src={sheetUrl}
                                title="Data Project 1 Google Sheet"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="dataReflectionSection">
                <div className="dataProjectContentContainer">
                    <div className="dataReflectionGrid">
                        <div className="reflectionTitle">
                            <span>Analysis & Reflection</span>

                            <h2>What I noticed about my screen time</h2>

                            <p>
                                Looking at the charts helped me understand how my
                                screen time changes depending on my activities during
                                the week.
                            </p>
                        </div>

                        <div className="dataReflectionCard">
                            <p>
                                After looking at my screen-time data, I noticed that
                                Firefox was my most-used application during the week,
                                making up about 33.1% of my total usage. I mainly use
                                Firefox for watching YouTube, checking my courses, and
                                studying, so a large amount of this time was not only
                                for entertainment.
                            </p>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}