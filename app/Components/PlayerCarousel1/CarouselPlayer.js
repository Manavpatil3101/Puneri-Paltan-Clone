import classes from "./CarouselPlayers.module.css"
import { Exo } from "next/font/google";
const exoReg=Exo({
    variable:"exo_regular",
    subsets:["latin"],
    weight:"400"
})
const exoBold=Exo({
    variable:"exo_bold",
    subsets:["latin"],
    weight:"700"
})


const CarouselPlayers=({src,fname,lname,type,name})=>{
    
    return(
        <>
        <div className={`${classes.box}`}>
                <div className={`${classes.transform}`} >
                    <div className="relative transform scale-90 transition-all duration-[900ms] ease-in"> 
                        <img src={src ? src : "/player-person.png"}/>
                    </div>
                </div>
        </div>
        </>
    )
}
export default CarouselPlayers;