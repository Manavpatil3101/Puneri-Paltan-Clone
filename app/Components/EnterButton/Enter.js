import classes from "./Enter.module.css"

const Enter = ({btnlink})=>{
    return(
        <a href={btnlink}>
        <button className={classes.btn}>
            Enter
        </button>
        </a>
    )
}

export default Enter