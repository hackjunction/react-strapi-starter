import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash-es';
import './style.scss';

import LoadingPage from '../Loading';
import ErrorPage from '../Error';
import NotFoundPage from '../NotFound';
import Page from '../PageHOC';

import HeaderImage from '../../components/HeaderImage';
import LogoHeader from '../../components/HeaderImage/LogoHeader';
import BlockSection from '../../components/BlockSection';
import Markdown from '../../components/Markdown';
import PartnerLogoGrid from '../../components/LinkGrid/PartnerLogoGrid';
import Divider from '../../components/Divider';
import SingleColumnSection from '../../components/SingleColumnSection/index';
import FaqGrid from '../../components/FaqGrid';
import ImageLinks from '../../components/ImageLinks';
import StatBlock from '../../components/StatBlock';
import Countdown from '../../components/Countdown';

import MEDIA_KEYS from '../../redux/staticmedia/keys';

import {
    onlineEvents,
    onlineEventsLoading,
    onlineEventsError,
} from '../../redux/onlineevents/selectors';

class OnlineEventPage extends PureComponent {

    render() {
        const { loading, error, event } = this.props;

        if (loading) {
            return <LoadingPage />;
        }

        if (error) {
            return <ErrorPage />;
        }

        if (!event) {
            return <NotFoundPage />;
        }

        return (
            <Page
                pageTitle={event.navTitle || event.name}
                metaDesc={event.punchline}
                ogImageUrl={event.headerImage ? event.headerImage.url : null}
            >
                <HeaderImage
                    image={event.headerImage}
                    alt="Header image"
                >
                    <LogoHeader
                        logo={event.logo}
                        punchline={event.punchline}
                        link={event.linkToEventSite}
                        linkText={'Join'}
                    />
                </HeaderImage>
                <BlockSection title={event.topSectionTitle} subtitle={event.topSectionSubtitle}>
                    <Markdown source={event.topSectionBody} />
                    <Divider lg />
                </BlockSection>
                <Divider lg />
                <SingleColumnSection title={event.name + ' begins in'} center>
                    <Countdown to={event.begins} />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection title={'Ready to join?'} subtitle="Here's a few useful links:" center>
                    <a className="OnlineEvent--link" href={event.linkToEventSite}>Sign up here</a>
                    <a className="OnlineEvent--link" href={event.linkToEventSite}>Slack channel</a>
                    <a className="OnlineEvent--link" href={event.linkToEventSite}>Submit your project</a>
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection title="Prizes in total" center>
                    <StatBlock value={event.prizesTotal} label="Euros" />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection title="Supporting Partners">
                    <PartnerLogoGrid partners={event.partners} itemsPerRow={3} />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection title="FAQ" subtitle="Frequently asked questions">
                    <Divider sm />
                    <FaqGrid items={event.faqs} />
                </SingleColumnSection>
                <Divider lg />
                <ImageLinks
                    links={[
                        {
                            imageKey: MEDIA_KEYS.calendarPageHeaderImage,
                            imageAlt: 'Link',
                            linkTo: '/calendar',
                            linkText: 'Calendar'
                        },
                        {
                            imageKey: MEDIA_KEYS.conceptsPageHeaderImage,
                            imageAlt: 'Link',
                            linkTo: '/concepts/junction',
                            linkText: 'Junction 2019'
                        },
                        {
                            imageKey: MEDIA_KEYS.storyPageHeaderImage,
                            imageAlt: 'Link',
                            linkTo: '/story',
                            linkText: 'Junction Story'
                        }
                    ]}
                />
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    const events = onlineEvents(state);

    return {
        event: find(events, e => e.slug === match.params.slug),
        loading: onlineEventsLoading(state),
        error: onlineEventsError(state),
    }
}

export default connect(
    mapStateToProps
)(OnlineEventPage);
