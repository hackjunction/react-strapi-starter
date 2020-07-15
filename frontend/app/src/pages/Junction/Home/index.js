import React, { PureComponent } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import DividerLine from "../../../components/DividerLine";
import SectionImage from "../../../components/SectionImage";
import Planet from "../../../components/Planet";
import EventCalendar from "../../../components/EventCalendar";

import Page from "../../PageHOC";
import SmallButton from "../../../components/SmallButton";
import HeaderSection from "../../../components/HeaderSection";
import SingleColumnSection from "../../../components/SingleColumnSection";

const EventsMap = React.lazy(() => import("../../../components/EventsMap"));

export default () => {
    return (
        <Page
            className="Junction-Default HomePage"
            pageTitle="Hack the Future"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                body="We organize epic hackathons and other tech events -
                        around the world, around the year."
                logo={require("../../../assets/logos/text_black.png")}
            >
                <div className="ReadMore">
                    <SmallButton className="Default-button" text="Read More" />
                </div>
                <SmallButton
                    className="Default-button-small"
                    to
                    text="Junction App"
                />

                <SmallButton
                    className="Default-button-small"
                    to
                    text="Organize a hackathon"
                />

                <SmallButton
                    className="Default-button-small"
                    to
                    text="Junction 2020 Connected"
                />
            </HeaderSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected_main.jpg"),
                }}
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            ></SectionImage>
            <DividerLine stop />
            <SingleColumnSection halfpage>
                <Planet />
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected_main.jpg"),
                }}
                imageKey={MEDIA_KEYS.homePageHackingImage}
                alt="People attending a hackathon"
            ></SectionImage>
            <DividerLine stop />
            <SingleColumnSection halfpage title="Upcoming events">
                <EventCalendar />
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected_main.jpg"),
                }}
                imageKey={MEDIA_KEYS.homePageCommunityImage}
                alt="Junction Community"
            ></SectionImage>
        </Page>
    );
};
