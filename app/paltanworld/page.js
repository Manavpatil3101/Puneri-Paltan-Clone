import Footer from "../Components/Footer/Footer";
import classes from "./PaltanWorld.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export const metadata = {
  title: "Paltan World",
  description: "This is Paltan World page",
};

const PaltanWorld = () => {
  return (
    <Container fluid className="p-0">
      <Row >
        <img className="p-0" src="/paltan-banner.png" />
      </Row>
      <Row  className={classes.paltan}>
        
        <Col xs={12} md={12} xl={6} className={`p-0 ${classes.pal1}`}>
        <Link href="/puneritv" style={{cursor:"pointer"}}>
          <img src="/puneri-tv-2024.png" />
          <h2>
            Puneri TV
          </h2>
          </Link>
        </Col>
       
        <Col  xs={12} md={12} xl={6} className={`p-0 ${classes.pal1}`}>
        <Link href="/gallery" style={{cursor:"pointer"}}>
          <img src="/puneri-gallery-2024.png" />
          <h2>
            Gallery
          </h2>
          </Link>
        </Col>
      </Row>

      <Footer/>
    </Container>
  );
};

export default PaltanWorld;
