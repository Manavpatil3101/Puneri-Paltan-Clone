'use client';

import PlayerTitle from "../Components/PlayerTitle/PlayerTitle";
import classes from "./Players.module.css"
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import PlayerPerson from "../Components/PlayerPerson/PlayerPerson";
import Footer from "../Components/Footer/Footer";
import Link from 'next/link';
import Loader from "../Components/Loading/loading";
import AOS from "aos";
import "aos/dist/aos.css";

const Players = () => {

    const [raiders, setRaiders] = useState([]);
    const [defenders, setDefenders] = useState([]);
    const [allrounders, setAllrounders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchdata = async (id, set) => {
        try {
            const res = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=${id}`);
            set(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    useEffect(() => {
        const fetchAll = async () => {
            await Promise.all([
                fetchdata(1, setRaiders),
                fetchdata(2, setDefenders),
                fetchdata(3, setAllrounders)
            ]);
            setLoading(false);
        };
        fetchAll();
    }, []);

    if (loading) {
        return <Loader/>;
    }

    
    return (
        <Container fluid className="p-0">
            <Row>
                <Col>
                    <img className={`d-none d-md-block ${classes.ban}`} src="/player-banner.jpg" />
                    <div>
                        <img data-aos="fade-down" className={`d-none d-md-block ${classes.banlogo}`} src="/banner-title.png" />
                        <h1 data-aos="fade-up" className={`d-none d-md-block ${classes.title}`}>
                            Players
                        </h1>
                    </div>
                    <img className={`d-none d-md-block ${classes.person}`} src="/player-person.png" />
                </Col>
                <Col xs={12} className="d-block d-md-none p-0 text-center">
                    <img
                        src="/players-banner-mobile.jpg"
                        className={`img-fluid ${classes.mobban}`}
                        alt="Mobile Gallery Banner"
                    />
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#edeef2", paddingTop: "80px" }}>
                <PlayerTitle ptitle="Raiders" />
                <Row className={classes.players}>
                    {
                        raiders.map((player, k) => {
                            return (
                                <Col xs={12} md={6} xl={4} key={k}>
                                    <Link href={{ pathname: `/players/${player.id}`, query: { name: player.name } }} passHref>
                                            <PlayerPerson
                                                pim={player.profile_image}
                                                pname={player.name.split(" ")[0]}
                                                psurname={player.name.split(" ")[1]}
                                                ptitle={player.cat_name}
                                            />
                                    </Link>

                                </Col>
                            )
                        })
                    }
                </Row>
            </Row>

            <Row>
                <PlayerTitle ptitle="Defenders" />
                <Row className={classes.players}>
                    {
                        defenders.map((player, k) => {
                            return (
                                <Col xs={12} md={6} xl={4} key={k}>
                                    <Link href={{ pathname: `/players/${player.id}`, query: { name: player.name } }} passHref>
                                            <PlayerPerson
                                                pim={player.profile_image}
                                                pname={player.name.split(" ")[0]}
                                                psurname={player.name.split(" ")[1]}
                                                ptitle={player.cat_name}
                                            />
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Row>

            <Row style={{ backgroundColor: "#edeef2", paddingTop: "80px" }}>
                <PlayerTitle ptitle="All-Rounders" />
                <Row className={classes.players}>
                    {
                        allrounders.map((player, k) => {
                            return (
                                <Col xs={12} md={6} xl={4} key={k}>
                                    <Link href={{ pathname: `/players/${player.id}`, query: { name: player.name } }} passHref>
                                            <PlayerPerson
                                                pim={player.profile_image}
                                                pname={player.name.split(" ")[0]}
                                                psurname={player.name.split(" ")[1]}
                                                ptitle={player.cat_name}
                                            />
                                    </Link>

                                </Col>
                            )
                        })
                    }
                </Row>
            </Row>
            <Footer />
        </Container>
    )
}

export default Players;