import Main from '../components/Main'

export default function PresentationOne() {
    const pdfUrl = `${import.meta.env.BASE_URL}presentation.pdf`

    return (
        <>
            <section className="heroSection">
                <Main>
                    <div className="row heroMainPart d-flex justify-content-around align-items-center">
                        <div className="col-md-10">
                            <div className="heroText">
                                <h1>Presentation #1</h1>
                                <p>
                                    My first presentation focuses on circular reporting, which is a specific problem connected to fake news. Circular reporting happens when false or unverified information is repeated by different sources until it starts to look believable.
                                </p>

                                <div className="presentationHeroLinks">
                                    <a href="#presentation-pdf" className="presentationHeroButton">
                                        View Presentation
                                    </a>

                                    <a href={pdfUrl} target="_blank" rel="noreferrer" className="presentationHeroButton">
                                        Open PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Main>
            </section>

            <section className="presentationPageSection">
                <Main>
                    <div className="presentationContentBox">
                        <h2>Topic Explanation</h2>
                        <p>
                            This presentation is about circular reporting, which is when a claim is repeated again and again without being properly verified. One source may post information, another source may repost it, and then the repeated version may be used as “evidence” even though the original claim was never confirmed. This is dangerous because repetition can make false information feel true. In my presentation, I connected circular reporting to the larger problem of fake news and showed how misleading information can spread quickly online. I also explained that people can avoid circular reporting by tracing a claim back to its original source before trusting or sharing it.
                        </p>

                        <h2 id="presentation-pdf">Presentation Slides</h2>
                        <p>
                            Below is my Presentation #1 PDF about circular reporting.
                        </p>

                        <div className="pdfEmbedBox">
                            <iframe
                                src={pdfUrl}
                                title="Presentation #1 PDF"
                                className="presentationPdf"
                            ></iframe>
                        </div>

                        <div className="pdfButtonBox">
                            <a href={pdfUrl} target="_blank" rel="noreferrer" className="pdfOpenButton">
                                Open Presentation PDF
                            </a>
                        </div>

                        <h2>Research Source and Materials Used</h2>
                        <p>
                            For this presentation, I used different research sources and visual materials to explain circular reporting clearly. The ScienceDirect article helped me understand how fake news spreads through the Internet and social media, and how false information can affect individuals, society, and even countries. The article also explains fake news detection and describes features such as intentional creation, transmission, and public reaction. This connects to my presentation because circular reporting is one way false information can become stronger when it is repeated by different sources.
                        </p>

                        <p>
                            I also used visual materials to make the presentation easier to understand. One of the links is for the fake news image about repeating lies, which helped support the main idea that repetition can make false information look more believable. I mostly created and organized my slide design using Canva, including the layout, images, and overall visual style of the presentation. These materials helped me explain my topic in a more simple, visual, and interactive way.
                        </p>

                        <div className="sourceList">
                            <a href="https://www.sciencedirect.com/science/article/pii/S2667325824000414" target="_blank" rel="noreferrer">
                                ScienceDirect Article
                            </a>

                            <a href="https://www.toonpool.com/cartoons/Repeating%20Lies_426651" target="_blank" rel="noreferrer">
                                Fake News / Repeating Lies Image
                            </a>

                            <a href="https://www.youtube.com/watch?v=wPE6CkAW9QY" target="_blank" rel="noreferrer">
                                YouTube Source 1
                            </a>

                            <a href="https://www.youtube.com/watch?v=cSKGa_7XJkg&t=51s" target="_blank" rel="noreferrer">
                                YouTube Source 2
                            </a>

                            <a href="https://en.wikipedia.org/wiki/Circular_reporting" target="_blank" rel="noreferrer">
                                Circular Reporting Wikipedia Page
                            </a>

                            <a href="https://www.canva.com/" target="_blank" rel="noreferrer">
                                Canva
                            </a>
                        </div>

                        <h2>Presentation #1 Self-Reflection</h2>

                        <h3>What do you think went well during your presentation?</h3>
                        <p>
                            I think sticked to the point and also made the whole presentation interactive enough. Also the slides were also good.
                        </p>

                        <h3>What would you like to improve on?</h3>
                        <p>
                            I guess I want to improve the interactivity a little more.
                        </p>

                        <h3>What did you learn from watching your classmates’ presentations?</h3>
                        <p>
                            I learned a lot to be honest, starting from persuasive language to clickbait and so on. They were really insightful and I got to learn the same topics from different perspective which made it more interestting.
                        </p>
                    </div>
                </Main>
            </section>
        </>
    )
}