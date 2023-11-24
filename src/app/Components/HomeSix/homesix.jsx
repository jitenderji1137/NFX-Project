import Styles from "./homesix.module.css"
import Form from "../HomeOne/form"
export default function HomeSix(){
    return(
        <>
        <div className={Styles.HomeSix}>
            <h2>Frequently Asked Questions</h2>
            <ul className="_accordion_heitc_188">
                <li>
                    <details open="">
                        <summary className={Styles.Summary}>What is Netflix?</summary>
                        <p className={Styles.SummaryPara}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                        <p className={Styles.SummaryPara}>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </details>
                </li>
                <li>
                    <details open="">
                        <summary className={Styles.Summary}>How much does Netflix cost?</summary>
                        <p className={Styles.SummaryPara}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹&nbsp;149 to ₹&nbsp;649 a month. No extra costs, no contracts. </p>
                    </details>
                </li>
                <li>
                    <details open="">
                        <summary className={Styles.Summary}>Where can I watch?</summary>
                        <p className={Styles.SummaryPara}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                        <p className={Styles.SummaryPara}>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere. </p>
                    </details>
                </li>
                <li>
                    <details open="">
                        <summary className={Styles.Summary}>How do I cancel?</summary>
                        <p className={Styles.SummaryPara}>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </details>
                    </li>
                    <li>
                        <details open="">
                            <summary className={Styles.Summary}>What can I watch on Netflix?</summary>
                            <p className={Styles.SummaryPara}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </details>
                    </li>
                    <li>
                        <details open="">
                            <summary className={Styles.Summary}>Is Netflix good for kids?</summary>
                            <p className={Styles.SummaryPara}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                        </details>
                    </li>
            </ul>
        </div>
        <div className={Styles.ReadytoWatch}>Ready to watch? Enter your email to create or restart your membership.</div>
        <Form/>
        <div className={Styles.BorderBottom}></div>
        </>
    )
}