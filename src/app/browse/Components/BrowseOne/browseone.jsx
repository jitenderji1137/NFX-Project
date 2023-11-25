'use server'
import { createClient } from "@supabase/supabase-js"
import Styles from "./browseone.module.css"
import Image from "next/image"
import Link from "next/link"
export default async function BrowseOne(){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from('Free-Netflix-Banner').select('*').eq('id', 1);
    const Banner = GET.data[0];
    return(
        <>
            <div className={Styles.TextDiv} style={{ backgroundImage: `url(${Banner.Big_Image})` }}>
                <div>
                    <div>
                        <div>
                        <div className={Styles.Small_Image}><Image src={Banner.Small_Image} priority={false} alt='banner' width={400} height={400}/></div>
                        <div className={Styles.AboutBanner}>
                            <h1>{Banner.Name}</h1>
                            <div>
                                <span>{Banner.Year}</span>
                                <span> | </span>
                                <span>{Banner.UA}</span>
                                <span> | </span>
                                <span>{Banner.Duration}</span>
                                <span> | </span>
                                <span>{Banner.Geans} </span>
                                <Link href={`/entertainment/player/${Banner.Link}/${Banner.Name.split(" ").join("-")}`}>Play</Link>
                            </div>
                            <div className={Styles.Paragraph}>
                                <div>{Banner.Paragraph}</div>
                                <div className='pt-4'>
                                    <span className='info-item'>Starring: </span>
                                    <span className='text-sm'>{Banner.Cast}</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}