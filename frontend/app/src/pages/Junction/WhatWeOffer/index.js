import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";

import Page from "../../PageHOC";
import SmallButton from "../../../components/SmallButton";

const BOTTOM_LINKS = [
    {
        imageKey: MEDIA_KEYS.partnerPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/partners",
        linkText: "For partners",
    },
    {
        imageKey: MEDIA_KEYS.volunteerPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/volunteers",
        linkText: "For volunteers",
    },
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/calendar",
        linkText: "Calendar",
    },
];

class WhatWeOfferPage extends PureComponent {
    render() {
        return (
            <Page
                className="WhatWeOfferPage Junction-Default"
                pageTitle="Our story"
                metaDescKey={KEYS.WhatWeOfferPageSubtitle}
                ogImageKey={MEDIA_KEYS.WhatWeOfferPageHeaderImage}
            >
                <div className="WhatWeOfferPage--TopContent">
                    <div className="WhatWeOfferPage--TopContent--First">
                        <p className="topic">What we offer</p>
                        <p>Lirum larum</p>
                    </div>
                    <div className="WhatWeOfferPage--TopContent--Second">
                        <img
                            src={require("../../../assets/images/banner/connected.png")}
                            width="100%"
                        />
                    </div>
                    <div className="WhatWeOfferPage--TopContent--Third">
                        <p className="topic-subtitle">
                            Junction 2020 Connected
                        </p>

                        <p>
                            Junction 2020 Connected is a new take on the
                            established concept of a hackathon; to compliment
                            its online aspect, participants all over the world
                            can join physical locations hosted by Junction and
                            other organizations. The physical hubs give the
                            concept of a normal online hackathon a twist by
                            increasing the sense of community, and making
                            physical interaction possible when needed.
                        </p>
                        <SmallButton
                            className="Default-button"
                            to
                            text="READ MORE"
                        />
                    </div>
                </div>
                <div className="WhatWeOfferPage--TopContent">
                    <div className="WhatWeOfferPage--TopContent--Second">
                        <img
                            src={require("../../../assets/images/banner/japp.png")}
                            width="100%"
                        />
                    </div>
                    <div className="WhatWeOfferPage--TopContent--Third">
                        <p className="topic-subtitle">Junction App</p>

                        <p>
                            Junction 2020 Connected is a new take on the
                            established concept of a hackathon; to compliment
                            its online aspect, participants all over the world
                            can join physical locations hosted by Junction and
                            other organizations. The physical hubs give the
                            concept of a normal online hackathon a twist by
                            increasing the sense of community, and making
                            physical interaction possible when needed.
                        </p>
                        <SmallButton
                            className="Default-button"
                            to
                            text="READ MORE"
                        />
                    </div>
                </div>
                <div className="WhatWeOfferPage--TopContent">
                    <div className="WhatWeOfferPage--TopContent--Second">
                        <img
                            src={require("../../../assets/images/banner/heltech.jpg")}
                            width="100%"
                        />
                    </div>
                    <div className="WhatWeOfferPage--TopContent--Third">
                        <p className="topic-subtitle">Hel Tech</p>

                        <p>
                            Junction 2020 Connected is a new take on the
                            established concept of a hackathon; to compliment
                            its online aspect, participants all over the world
                            can join physical locations hosted by Junction and
                            other organizations. The physical hubs give the
                            concept of a normal online hackathon a twist by
                            increasing the sense of community, and making
                            physical interaction possible when needed. Hel Tech
                            is our only monthly meetup, organized on the first
                            Monday of the month and always discussing the latest
                            tech. With speakers from all over the
                        </p>
                        <SmallButton
                            className="Default-button"
                            to
                            text="READ MORE"
                        />
                    </div>
                </div>
                <div className="WhatWeOfferPage--Host">
                    <h1>Hosting an event on our platform</h1>
                    <div className="WhatWeOfferPage--Host--Hosting">
                        <div className="WhatWeOfferPage--Host--Hosting--card">
                            <div className="WhatWeOfferPage--Host--Hosting--card--topic">
                                <h3>For non-profits and Junction partnes</h3>
                            </div>
                            <div className="WhatWeOfferPage--Host--Hosting--card--test">
                                <ul>
                                    <li>
                                        Event registration and organisation
                                        through platform
                                    </li>
                                </ul>
                            </div>
                            <div className="WhatWeOfferPage--Host--Hosting--card--Price">
                                FREE
                            </div>
                        </div>
                        <div className="WhatWeOfferPage--Host--Hosting--card">
                            <div className="WhatWeOfferPage--Host--Hosting--card--topic">
                                <h3>Business Basic</h3>
                            </div>
                            <div className="WhatWeOfferPage--Host--Hosting--card--test">
                                <ul>
                                    <li>
                                        Event registration and organisation
                                        through platform
                                    </li>
                                    <li>Tech Support during the whole event</li>
                                </ul>
                            </div>
                            <div className="WhatWeOfferPage--Host--Hosting--card--Price">
                                800 €
                            </div>
                        </div>
                        <div className="WhatWeOfferPage--Host--Hosting--card">
                            <div className="WhatWeOfferPage--Host--Hosting--card--topic">
                                <h3>Business Premium</h3>
                            </div>
                            <div className="WhatWeOfferPage--Host--Hosting--card--test">
                                <ul>
                                    <li>
                                        Event registration and organisation
                                        through platform
                                    </li>
                                    <li>Tech Support during the whole event</li>
                                    <li>
                                        Dedicated project lead from Junction
                                        team
                                    </li>
                                    <li>Junction made website for event</li>
                                    <li>
                                        Event PR through Junction’s media
                                        channels
                                    </li>
                                </ul>
                            </div>

                            <div className="WhatWeOfferPage--Host--Hosting--card--Price">
                                4100 €
                            </div>
                        </div>
                    </div>
                    <div className="WhatWeOfferPage--Host--Expertise">
                        Our expertise of organizing hackathons combined with the
                        power of a highly-customizable platform for events makes
                        hosting diverse events possible.
                    </div>
                    <SmallButton
                        className="Default-button button-length"
                        to
                        text="CONTACT US FOR MORE INFORMATION"
                    />
                </div>
            </Page>
        );
    }
}

export default WhatWeOfferPage;
