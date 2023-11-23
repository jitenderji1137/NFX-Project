'use server'
import Styles from "./homeone.module.css"
import Link from "next/link"
import Image from "next/image"
import Form from "./form"
export default async function HomeOne(){
    return(
        <>
        <div className={Styles.HomeOne} style={{ backgroundImage: `url(/HomeBanner.jpg)` }}>
            <div>
                <nav className={Styles.Nav}>
                    <div><Image src="/Logo.png" width={300} height={300}/></div>
                    <div>
                        <span>
                            <div><Image src="/language.svg" width={100} height={100} className={Styles.Imagess}/>&#160;&#160;Language&#160;&#160;<Image src="/dropdown.svg" width={100} height={100} className={Styles.Images}/></div>
                            <span className={Styles.HomeOneAbs}>
                                <Link href="/">English</Link>
                                <Link href="/">Hindi</Link>
                                <Link href="/">Tamil</Link>
                                <Link href="/">Talgu</Link>
                            </span>
                        </span>
                        <Link href="/">Sign In</Link>
                    </div>
                </nav>
                <div className={Styles.Heading}>
                    <div>Unlimited movies, TV shows and more.</div>
                    <div>Watch anywhere. Cancel anytime.</div>
                    <div>Ready to watch? Enter your email to create or restart your membership.</div>
                </div>
                <Form/>
            </div>
        </div>
        </>
    )
}