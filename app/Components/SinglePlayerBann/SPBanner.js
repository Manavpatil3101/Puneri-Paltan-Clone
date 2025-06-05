'use-client'
import classes from "./SPBanner.module.css";
import { Container, Row, Col } from "react-bootstrap";

const SPBanner = ({ pname, pimg, psurname }) => {
    return (
        <Container>
            <img className={classes.banner} src="/SinglePlayer.jpg" />
            <Row>
                <Col xl={6} md={6} xs={12}>
                    <img className={classes.person} src={pimg} /></Col>
                <Col xl={6} md={6} xs={12}>
                    <h1 className={`text-center ${classes.name}`}>
                        {pname} <br /> {psurname}
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default SPBanner;