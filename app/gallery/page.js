"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import SeasonButton from "../Components/SeasonButton/SeasonButton";
import classes from "./Gallery.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Suspense } from "react";
import GalleryCard from "../Components/GalleryCard/GalleryCard";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loading/loading";
import Link from "next/link";

const Gallery = () => {
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
        .get(`https://appy.trycatchtech.com/v3/puneri_paltan/gallary_list?cat_id=${catId}`)
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
      <Row>
        <img
          src="/gallery-bann.jpg"
          className={`p-0 d-none d-md-block ${classes.galban}`}
          alt="Gallery Banner"
        />

        <Col xs={12} md={8} xl={6}>
          <img
            className={`d-none d-md-block ${classes.gallogo}`}
            src="/banner-title.png"
            alt="Gallery Logo"
          />
          <h1 className={`d-none d-md-block ${classes.galtitle}`}>Gallery</h1>
        </Col>

        <Col xs={12} md={4} xl={6}>
          <img
            className={`d-none d-md-block ${classes.galman}`}
            src="/gallery-person.png"
            alt="Gallery Person"
          />
        </Col>

        <Col xs={12} className="d-block d-md-none text-center">
          <img
            src="/puneri-gallery-mob-banner.jpg"
            className={`img-fluid ${classes.mobban}`}
            alt="Mobile Gallery Banner"
          />
        </Col>
      </Row>
      <Row className={classes.btn}>
        <SeasonButton season={season} onSelect={handleSeasonChange} />
      </Row>
      <Row
        className={`d-flex justify-content-center mx-auto ${classes.row}`}
      >
        {list.map((item, k) => {
          return (
            <Col key={k} xs={12} md={12} lg={6}>

              <Link className="text-decoration-none" href={`/gallery/${item.id}`} passHref>

                <GalleryCard galimg={item.main_image} galtitle={item.name} />

              </Link>
            </Col>
          )
        })}
      </Row>
      <Row className={`g-0 ${classes.footph}`}>
        <Col xs={12} md={4} xl={4} className={classes.footlinkph}>
          <a href="/puneritv">
            <div className={classes.footlink}>
              <img src="/puneri-tv-2024.png" />
              <h4>Puneri Tv</h4>
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
      <Footer />
    </Container>
  );
};

export default Gallery;
