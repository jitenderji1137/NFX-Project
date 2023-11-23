'use client'
import Styles from "./homeone.module.css"
export default function Form(){
    return(
        <>
                <form className={Styles.Email} onSubmit={(e)=>{e.preventDefault()}}>
                    <input type="email" placeholder="Email Address ..."/>
                    <button>Get Started </button>
                </form>
        </>
    )
}