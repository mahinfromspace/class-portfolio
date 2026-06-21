import Main from '../components/Main'

export default function DataProject2() {
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5-PIX9lX5tcv2TlMN3I4TRvAKaFdC8j9OQDbiZnWP9j0BVB6G1e0nBvOyszekQ1_NzqjuFo6q3Jky/pubhtml'
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScdPR5g6MNtcTQT1SJoU-89sUvUK_4kYtVKXTl9KUIF0HL3EA/viewform'

    return (
        <>
            <section className="dataProjectHeroSection">
                <Main>
                    <div className="dataProjectHeroContent">
                        <span className="dataProjectLabel">
                            Data Project #2
                        </span>

                        <h1>
                            Social Media
                            <br />
                            Productivity Analysis
                        </h1>

                        <p>
                            In this project, I created a Google Forms survey to understand
                            the effect of social media on university students’ daily-life
                            productivity. I collected student responses, organized the data
                            in Google Sheets, used formulas to calculate statistics, and
                            created charts to show important trends.
                        </p>

                        <div className="dataHeroButtons">
                            <a
                                href={sheetUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dataProjectButton"
                            >
                                Open Google Sheet
                            </a>

                            <a
                                href={formUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dataProjectButton"
                            >
                                Open Google Form
                            </a>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="dataSheetSection">
                <div className="dataProjectContentContainer">
                    <div className="dataSectionHeader">
                        <span>My Spreadsheet</span>

                        <h2>Survey Data, Tables, and Charts</h2>

                        <p>
                            The spreadsheet includes raw survey responses, edited responses,
                            summary tables, descriptive statistics, conditional formatting,
                            a filter view, and two charts showing the results of the survey.
                        </p>
                    </div>

                    <div className="dataSheetGlassCard">
                        <div className="sheetTopBar">
                            <div className="sheetDots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <p>Google Sheets — Data Project #2</p>
                        </div>

                        <div className="sheetEmbed">
                            <iframe
                                src={sheetUrl}
                                title="Data Project 2 Google Sheet"
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

                            <h2>What I noticed from the survey results</h2>

                            <p>
                                The goal of this project was to understand the effect of
                                social media on university students’ daily-life productivity.
                            </p>
                        </div>

                        <div className="dataReflectionCard">
                            <p>
                                From the survey results, Instagram was the platform students used the most.
                                Out of 12 students, 7 chose Instagram, which is 58.33% of the responses.
                                TikTok came next with 3 students, or 25%, and Facebook was the lowest with
                                2 students, or 16.67%. This shows that Instagram was clearly the most popular
                                platform among the students in this survey.
                            </p>

                            <p>
                                The numerical question showed how often students checked social media during
                                one hour of studying. The mean was 5.5, but the median was 3.5 and the mode
                                was 1. This means that most students did not check social media extremely
                                often. However, one student answered 30, which was much higher than the other
                                responses. Because of that, the average became higher. This suggests that
                                most students checked social media a few times while studying, but some
                                students may be much more distracted than others.
                            </p>

                            <p>
                                For the statement “Social media makes it difficult for me to concentrate on
                                academic work,” no students chose Disagree or Strongly disagree. Six students
                                chose Neutral, three chose Agree, and three chose Strongly agree. This means
                                half of the students were neutral, while the other half agreed that social
                                media can make concentration difficult. Since nobody disagreed, the results
                                suggest that social media may have a negative effect on academic productivity,
                                at least for some students.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}