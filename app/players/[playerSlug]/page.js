'use client';
import classes from "./PlayerSlug.module.css"
import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useParams } from "next/navigation";
import SPBanner from "@/app/Components/SinglePlayerBann/SPBanner";
import PlayerTitle from "@/app/Components/PlayerTitle/PlayerTitle";
import Footer from "@/app/Components/Footer/Footer";
import Carousel2 from "@/app/Components/PlayerCarousel2/Carousel2";
import Loader from "@/app/Components/Loading/loading";

const Heading = ({ parameter }) => {
    return (
        <h5 className={classes.heading}>
            {parameter}
        </h5>
    )
}

const SinglePlayer = () => {

    const params = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const playerSlug = params.playerSlug;

    useEffect(() => {
        axios
            .get(`https://appy.trycatchtech.com/v3/puneri_paltan/single_player?id=${playerSlug}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }


    return (
        <Container fluid className="p-0">
            <Row>
                {
                    data.map((a) => {
                        return (
                            <Fragment key={a.id} >
                                <SPBanner pname={a.name.split(" ")[0]} pimg={a.full_image} psurname={a.name.split(" ")[1]} />
                                <div className={classes.parent}>
                                    <img src="/player-desc-bg.jpg" className={`${classes.bg}`} />
                                </div>
                                <Row xs={1} md={1} xl={2} className={`d-grid d-flex-lg ${classes.dets}`}>
                                    <Col xs={12} md={12} xl={6}>
                                        <img src={a.full_image} className={classes.player_full_image} />
                                    </Col>
                                    <Col className={classes.player_dets} xs={12} md={12} xl={6}>
                                        <div className={classes.jp}>
                                            <Col className={classes.ti}>
                                                <Heading parameter="Jersey No." />
                                                <h6>
                                                    {a.jersey_no}
                                                </h6>
                                            </Col>
                                            <Col  className={`${classes.ti} ${classes.ti_2}`}>
                                                <Heading parameter="position" />
                                                <h6>
                                                    {a.position}
                                                </h6>
                                            </Col>
                                        </div>
                                        <hr className={classes.player_hr} style={{ width: "40rem", margin: "55px 0 40px -200px" }} />
                                        <Col className={classes.player_dets_2} style={{ marginLeft: "-580px"}}>
                                            <Heading parameter="Vitals" />
                                            <table className={classes.table}>
                                                <tbody>
                                                    <tr>
                                                        <td className={classes.title}>Name</td>
                                                        <td className={classes.detail}>{a.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={classes.title}>Date of Birth</td>
                                                        <td className={classes.detail}>{a.date_of_birth}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={classes.title}>Nationality</td>
                                                        <td className={classes.detail}>{a.nationality}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Col>
                                </Row>
                                <Row className={classes.stats}>
                                    <h2 className={classes.statistics}>
                                        Statistics
                                    </h2>
                                </Row>
                                <Row className={`d-grid d-lg-flex ${classes.statrow1}`}>
                                    <Col xs={12} md={12}  className={classes.stattitle}>
                                        <PlayerTitle ptitle="Overall" />
                                    </Col>

                                    <Col xs={12} className={`d-flex justify-content-center align-items-center ${classes.allstats}`}>
                                        <Row className="justify-content-center">
                                            <Col xs={6} md={6} xl={3} className={`d-grid text-center ${classes.pstats}`}>
                                                <h4>{a.Matches_played}</h4>
                                                <h5>Matches Played</h5>
                                            </Col>

                                            <Col xs={6} md={6} xl={3} className={`d-grid text-center ${classes.pstats}`}>
                                                <h4>{a.total_ponints_earned}</h4>
                                                <h5>Total Points Earned</h5>
                                            </Col>

                                            <Col xs={6} md={6} xl={3} className={`d-grid text-center ${classes.pstats}`}>
                                                <h4>{a.most_points_in_a_match}</h4>
                                                <h5>Most Points in a Match</h5>
                                            </Col>

                                            <Col xs={6} md={6} xl={3} className={`d-grid text-center ${classes.pstats}`}>
                                                <h4>{a.not_out_percentage}</h4>
                                                <h5>Not Out Percentage</h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className={classes.statrow2}>
                                <Col xs={12} md={12} className={classes.stattitle}>
                                        <PlayerTitle ptitle="Raid" />
                                    </Col>
                                    <Col className={`d-flex justify-content-center align-items-center ${classes.allstats2}`}>
                                        
                                            <div className={`d-grid text-center ${classes.pstats}`}>
                                                <h4> {a.no_of_super_raids} </h4>
                                                <h5>No. of super raids</h5>
                                            </div>
                                            <div className={`d-grid text-center ${classes.pstats}`}>
                                                <h4> {a.super_10s} </h4>
                                                <h5>Super 10s</h5>
                                            </div>
                                            <div className={`d-grid text-center ${classes.pstats}`}>
                                                <h4> {a.avg_raid_points} </h4>
                                                <h5>Avg. Raid Points</h5>
                                            </div>
                                       
                                    </Col>
                                </Row>
                                <Row className={classes.statrow3}>
                                <Col xs={12} md={12} className={classes.stattitle}>
                                        <PlayerTitle ptitle="Tackles" />
                                    </Col>
                                    <Col className={`d-flex justify-content-center align-items-center gap-3 ${classes.allstats2}`}>
                                        
                                            <div className={`d-grid text-center ${classes.pstats}`}>
                                                <h4> {a.no_of_super_tackles} </h4>
                                                <h5>No. of super tackles</h5>
                                            </div>
                                            <div className={`d-grid text-center ${classes.pstats}`}>
                                                <h4> {a.total_tacle_points} </h4>
                                                <h5>Total tackle points</h5>
                                            </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <h2 className={`mt-5 ${classes.statistics}`}>
                                        Other Players
                                    </h2>
                                </Row>
                                <Carousel2/>
                            </Fragment>
                        )
                    })
                }
            </Row>
                <Footer/>
        </Container>
    )
}

export default SinglePlayer;