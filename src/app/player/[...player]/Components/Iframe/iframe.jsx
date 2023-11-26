'use server'
import { createClient } from '@supabase/supabase-js';
import Styles from "./iframe.module.css"
const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {
  auth: { persistSession: false },
});
export default async function IframePlayer({ID}){
    const response = (await supabase.from(process.env.NEXT_PUBLIC_SUPABASE_MOVIES_DATABASE_NAME).select('*').eq('ID', ID)).data[0];
    const title = response.Title;
    const image = response.Image;
    const fileid = response.FileID;
    let download = null;
    let iframeUrl = '';
    if (response.Plateform === 'filemoon') {
      iframeUrl = `https://filemoon.sx/e/${fileid}?poster=${image}&logo=https://i.postimg.cc/vTYqnTZs/Logo.png`;
      download = `https://filemoon.sx/download/${fileid}`
    } else if (response.Plateform === 'Youtube') {
      iframeUrl = `https://www.youtube.com/embed/${fileid}`;
    } else if (response.Plateform === 'Vidsrc') {
      const embedType = response.MainCategory === 'TV' ? 'tv' : 'movie';
      iframeUrl = `https://vidsrc.to/embed/${embedType}/${fileid}`;
    } else if (response.Plateform === 'vidsrc') {
      const embedType = response.MainCategory === 'TV' ? 'tv' : 'movie';
      iframeUrl = `https://vidsrc.me//embed//${embedType}?imdb=${fileid}`;
    } else if (response.Plateform === 'streamtape') {
      iframeUrl = `https://antiadtape.com/e/${fileid}?thumb=${image}`;
      download = `https://antiadtape.com/v/${fileid}`
    }
    return(
        <>
            <div className={Styles.Iframe}>
                <iframe allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="" width="100%" height="100%" src={iframeUrl} ></iframe>
            </div>
        </>
    )
}