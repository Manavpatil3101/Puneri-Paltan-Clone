import classes from "./Buytickets.module.css"
import { IoCaretForward } from "react-icons/io5";

const Buytickets = ()=>{
    return(
        <button className={classes.btn}>
           <div className="d-flex align-items-center"> Buy Tickets <IoCaretForward /></div>
        </button>
    )
}

export default Buytickets;