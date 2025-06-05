'use client'

import classes from "./PuneriTv.module.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import SeasonButton from "../Components/SeasonButton/SeasonButton";
import PuneriTvCard from "../Components/PuneriTvCard/PuneriTvCard";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loading/loading";



const PuneriTv = () => {

  const [list, setList] = useState([]);
  const [season, setSeason] = useState("Season 11");
  const [catId, setCatId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://appy.trycatchtech.com/v3/puneri_paltan/season_list")
      .then((response) => {
        const season11 = response.data.find((s) => s.cat_name === "Season 11");
        if (season11) {
          setCatId(season11.id);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (catId) {
      setLoading(true);
      axios
        .get(`https://appy.trycatchtech.com/v3/puneri_paltan/puneri_tv_list?cat_id=${catId}`)
        .then((response) => {
          setList(response.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    }
  }, [catId]);

  const handleSeasonChange = (selectedSeason) => {
    setSeason(selectedSeason);
    setLoading(true);

    axios
      .get("https://appy.trycatchtech.com/v3/puneri_paltan/season_list")
      .then((response) => {
        const selectedSeasonData = response.data.find(
          (s) => s.cat_name === selectedSeason
        );
        if (selectedSeasonData) {
          setCatId(selectedSeasonData.id);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />; 
  }
  return (
    <Container fluid className="p-0">
      <Row className={classes.ban}>
        <img src="/banner.jpg" className={`p-0 d-none d-md-block ${classes.galban}`} />
        <Col xs={12} md={8} xl={6}>
          <img className={`d-none d-md-block ${classes.gallogo}`} src="/banner-title.png" />
          <h1 className={`d-none d-md-block ${classes.galtitle}`}>Puneri <br />Tv</h1>
        </Col>
        <Col xs={12} md={4} xl={6} >
          <img className={`d-none d-md-block ${classes.galman}`} src="/puneri-tv-person.png" />
        </Col>
        <Col xs={12} className="d-block d-md-none mb-3 px-0 text-center">
          <img
            src="/puneri-tv-mob-banner.jpg"
            className={`img-fluid ${classes.mobban}`}
            alt="Mobile Gallery Banner"
          />
        </Col>
      </Row>
      <Row className={`mx-auto ${classes.btn}`}>
        <SeasonButton season={season} onSelect={handleSeasonChange} />
      </Row>
      <Row
        className={`md-flex justify-content-center mx-auto ${classes.row}`}
      >
        {list.map((item, k) => (
          <Col key={k} xs={12} md={6} lg={6}>
            <PuneriTvCard src="" url= {item.url} title={item.name} />
          </Col>
        ))}
      </Row>
      <Row className={`g-0 ${classes.footph}`}>
        <Col xs={12} md={4} xl={4} className={classes.footlinkph}>
          <a href="/gallery">
            <div className={classes.footlink}>
              <img src="/puneri-gallery-2024.png" />
              <h4>Gallery</h4>
            </div>
          </a>
        </Col>
        <Col xs={12} md={4} xl={4} className={classes.footlinkph}>
          <a>
            <div className={classes.footlink}>
              <img src="/puneri-wallpaper-2024.png" />
              <h4>Wallpapers</h4>
            </div>
          </a>
        </Col>
        <Col xs={12} md={4} xl={4} className={classes.footlinkph}>
          <a>
            <div className={classes.footlink}>
              <img src="/puneri-blogs-2024.png" />
              <h4>Blogs</h4>
            </div>
          </a>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default PuneriTv;
