import classes from "./GalleryCard.module.css";
import { Container } from "react-bootstrap";

const   GalleryCard = ({galimg, galtitle})=>{
    return(
        <Container className="mx-auto mb-3 " >
            <div className="overflow-hidden">
            <img  src={galimg}/>
               <h3 className={`text-decoration-none ${classes.title}`}>{galtitle}</h3>
            </div>
        </Container>
    )
}

export default GalleryCard;