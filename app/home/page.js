'use client';
import classes from "./Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Enter from "../Components/EnterButton/Enter";
import Buytickets from "../Components/Buytickets/Buytickets";
import Carousel from "../Components/PlayerCarousel1/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Link from "next/link";


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'aos-animate',
    });
  }, []);

  return (
    <Container fluid className={`p-0 overflow-hidden`}>
      <img src="/home1.webp" style={{ width: "100%" }} />

      <Row style={{ width: "102%" }} className={`${classes.desc}`}>
        <div>
          <div className={classes.line}></div>
          <div>
            <h6 className={classes.scroll}>scroll</h6>
          </div>
        </div>
        <div xs={12} md={12} xl={12} className={` ${classes.description}`}>
          Puneri Paltan is currently one of the top performing teams in the Pro
          Kabaddi League. With a mix of unstoppable energy, honed-out skills and
          steely nerves, here's a force that consistently looks forward to
          perform better, challenge its opponents and make a difference.
        </div>
      </Row>
      <Row
        className={`${classes.slick}`}
        style={{
          paddingBottom: "400px",
          width: "102%"
        }}
      >
        <Col xl={4}>
          <h2 data-aos="fade-down" className={classes.players}>Players</h2>
        </Col>
        <Col xl={8}>
          <Carousel />
          <div className={classes.entbtn}>
            <Enter btnlink="/players" /></div>
        </Col>
      </Row>

      <Row className={classes.tickets}>
        <a href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457" target="_blank">
          <div className={classes.both}>
            <Col className={classes.ticketleft}>
              <img src="/buy-tickets-homepage_s11.png" />
              <div className={classes.buybtn} >
                <Buytickets />
              </div>
            </Col>
            <Col className={classes.ticketright}>
              <img src="/tickets.png" />
            </Col>
          </div>
        </a>
      </Row>

      <Row className={`${classes.ticketbackground}`}>
      </Row>

      <Row className={`w-100 ${classes.paltanworld}`}>
        <div>
          <img className={classes.pwbann} src="/SinglePlayer.jpg" />
        </div>
        <Col className={classes.pwpeople}>
          <img src="/paltan-world-people.png" />
          <div>
            <div className={`d-none d-lg-block ${classes.dustl}`}>
              <img src="/puneri-world-left-dust.png" />
            </div>
            <div className={`d-none  d-lg-block ${classes.dustm}`}>
              <img src="/puneri-world-middle-dust.png" />
            </div>
            <div className={`d-none d-md-block d-lg-block ${classes.dustr}`}>
              <img src="/puneri-world-right-dust.png" />
            </div>
          </div>

        </Col>
        <Col style={{ position: "relative" }}>
          <div className={classes.pwtext}>
            <h2 data-aos="fade-down" className={classes.ptext}>
              Paltan
            </h2>
            <h2 data-aos="fade-up" className={classes.wtext}>
              World
            </h2>
            <div className={classes.pwbtn} style={{ marginLeft: "90px", marginTop: "-10px" }}>
              <Enter btnlink="/paltanworld" />
            </div>
          </div>
        </Col>
      </Row>

      <Row className={classes.newssection}>
        <div className={classes.newsimg}>
          <img src="/news-banner.jpg" />
          <div className={classes.paltannews}>
            <div >
              <h2 data-aos="fade-down" className={classes.newspp}>
                Puneri Paltan
              </h2>
            </div>
            <div className={classes.newsitntab}>
              <h2 data-aos="fade-up" className={classes.newsitn}>
                In the news
              </h2>
            </div>
          </div>
          <div className={classes.newsenter}>
            
            <Enter btnlink="/puneritv"/>
           
          </div>
        </div>
      </Row>
      <Row className={classes.subs}>
        <div className={classes.subscribesec}>
          <h3 data-aos="grow-in" className={`m-0 ${classes.growIn}`}>
            Subscribe to our newsletter
          </h3>
          <div className={classes.subdata}>
          <input type="email" placeholder="Enter your email-id" />
          <button>Go</button>
          </div>
        </div>
      </Row>
      <Row>
        <h2 data-aos="grow-in" className={classes.parttext}>
          Partners
        </h2>
        <Row className={classes.brands}>
          <a href="https://forcemotors.com/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
            <img src="/brand1.png" />
            <p className="text-center">Principal Partner</p>
          </a>
        </Row>
        <Row className={`d-flex`}>
          <div className="d-flex justify-content-center">
            <div className={classes.brands}>
              <a href="https://batery.ai/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand2.png" />
                <p className="text-center">Powered By</p>
              </a>
            </div>
            <div className={classes.brands}>
              <a href="https://www.kirloskarpumps.com/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand3.png" />
                <p className="text-center">Associate Partner</p>
              </a>
            </div>
          </div>
        </Row>
        <Row className="d-flex">
          <div className={`d-flex justify-content-center ${classes.copartner}`}>
            <div className={classes.brands}>
              <a href="https://www.stihl.com/en" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand4.png" />
                <p className="text-center">Co-Partner</p>
              </a>
            </div>
            <div className={classes.brands}>
              <a href="https://www.hintworld.com/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand5.png" />
                <p className="text-center">Co-Partner</p>
              </a>
            </div>
            <div className={classes.brands}>
              <a href="https://www.vikramtea.com/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand6.png" />
                <p className="text-center">Co-Partner</p>
              </a>
            </div>
            <div className={classes.brands}>
              <a href = "https://www.focus11.net/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand7.png" />
                <p className="text-center">Co-Partner</p>
              </a>
            </div>
          </div>
        </Row>
        <Row className="d-flex mb-5">
          <div className={`d-flex justify-content-center`}>
            <div className={classes.brands}>
              <a href="https://www.radiocity.in/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand8.png" />
                <p className="text-center">Radio Partner</p>
              </a>
            </div>
            <div className={classes.brands}>
              <a href="https://icon.in/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand9.png" />
                <p className="text-center">Travel Partner</p>
              </a>
            </div>
            <div className={classes.brands}>
              <a href="https://shivnaresh.in/" target="_blank" className="d-grid justify-content-center cursor-pointer text-decoration-none">
                <img src="/brand10.png" />
                <p className="text-center">Kit Partner</p>
              </a>
            </div>
          </div>
        </Row>
      </Row>
      <Footer />
    </Container>
  );
};

export default Home;
