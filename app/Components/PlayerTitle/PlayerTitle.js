import classes from "./PlayerTitle.module.css"

const PlayerTitle = ({ptitle})=>{
    return(
        <div className={classes.playtitle}>
            <h3>{ptitle}</h3>
        </div>
    )
}

export default PlayerTitle;