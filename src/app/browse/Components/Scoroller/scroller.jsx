'use server'
import Styles from "./render.module.css"
import { createClient } from "@supabase/supabase-js";
import Render from "./scrollerrender";
export default async function Scroller(){
    const supabase =  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY, {auth: { persistSession: false }});
    const GET = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).range(0,15);
    const WebSeries = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("MainCategory","WebSeries").range(0,15);
    const Movies = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("MainCategory","Movies").range(0,15);
    const Songs = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("MainCategory","Songs").range(0,15);
    const Comedy = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("Geans","Comedy").range(0,15);
    const Action = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("Geans","Action").range(0,15);
    const Horror = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("Geans","Horror").range(0,15);
    const Drama = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("Geans","Drama").range(0,15);
    const Romantic = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("Geans","Romantic").range(0,15);
    const Adventure = await supabase.from('Free-Netflix-Darabase').select('ID,Title,Image').order('ID', { ascending: false }).eq("Geans","Adventure").range(0,15);

    return(
        <>
        <div className={Styles.fnvbsjdbvdfjhbvuhef}>
            <Render Data={[GET.data,"Recent Uploaded ...","/entertainment/viewall/recent/1"]}/>
            <Render Data={[WebSeries.data,"Web Series ...","/entertainment/viewall/MainCategory/WebSeries/1"]}/>
            <Render Data={[Movies.data,"Movies ...","/entertainment/viewall/MainCategory/Movies/1"]}/>
            <Render Data={[Songs.data,"Songs ...","/entertainment/viewall/MainCategory/Songs/1"]}/>
            <Render Data={[Comedy.data,"Comedy ...","/entertainment/viewall/Geans/Comedy/1"]}/>
            <Render Data={[Action.data,"Action ...","/entertainment/viewall/Geans/Action/1"]}/>
            <Render Data={[Horror.data,"Horror ...","/entertainment/viewall/Geans/Horror/1"]}/>
            <Render Data={[Drama.data,"Drama ...","/entertainment/viewall/Geans/Drama/1"]}/>
            <Render Data={[Romantic.data,"Romantic ...","/entertainment/viewall/Geans/Romantic/1"]}/>
            <Render Data={[Adventure.data,"Adventure ...","/entertainment/viewall/Geans/Adventure/1"]}/>
        </div>
        </>
    )
}