import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import BlockSection from '../../components/BlockSection';
import Divider from '../../components/Divider';
import DebugPlaceholder from '../../components/DebugPlaceholder';

import Page from '../PageHOC';

import * as ContentSelectors from '../../redux/content/selectors';
import * as StaticContentSelectors from '../../redux/static/selectors';
import * as MediaSelectors from '../../redux/media/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';

const ConceptsPage = ({ eventconcepts, loading, content, headerImage }) => {
    function buildSubtitleItems(concept) {
        const items = [];

        if (concept.eventcategory) {
            items.push({
                icon: require('../../assets/icons/star.png'),
                text: concept.eventcategory.name
            });
        }

        if (concept.timedescription) {
            items.push({
                icon: require('../../assets/icons/calendar.png'),
                text: concept.timedescription
            });
        }

        if (concept.locationdescription) {
            items.push({
                icon: require('../../assets/icons/pointer.png'),
                text: concept.locationdescription
            });
        }

        return items;
    }

    function renderConcepts() {
        if (!Array.isArray(eventconcepts) || eventconcepts.length === 0) {
            return <DebugPlaceholder title="Event concepts" description="Add event concepts to show them here" />;
        }

        return eventconcepts.map(concept => {
            return (
                <React.Fragment key={concept.slug}>
                    <BlockSection title={concept.name} subtitleItems={buildSubtitleItems(concept)}>
                        <p>{concept.shortdescription}</p>
                    </BlockSection>
                    <Divider md />
                </React.Fragment>
            );
        });
    }

    return (
        <Page className="ConceptsPage" pageTitle="Concepts" metaDesc={content.conceptsPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
                mainTitle={content.conceptsPageTitle}
                bodyText={content.conceptsPageSubtitle}
            />
            <Divider lg />
            {renderConcepts()}
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    content: StaticContentSelectors.objectWithKeys([KEYS.conceptsPageTitle, KEYS.conceptsPageSubtitle])(state),
    loading: ContentSelectors.eventconceptsLoading(state),
    eventconcepts: ContentSelectors.eventconceptsByPriority(state),
    headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.conceptsPageHeaderImage)(state)
});

export default connect(mapStateToProps)(ConceptsPage);
