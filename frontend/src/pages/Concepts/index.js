import React from 'react'
import './style.scss'

import { connect } from 'react-redux'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection'
import Divider from '../../components/Divider'

import Page from '../PageHOC'

import * as ContentSelectors from '../../redux/content/selectors'
import * as StaticContentSelectors from '../../redux/static/selectors'
import * as MediaSelectors from '../../redux/media/selectors'
import KEYS from '../../redux/static/keys'
import MEDIA_KEYS from '../../redux/media/keys'

const ConceptsPage = ({ eventconcepts, loading, content, headerImage }) => {

	function buildSubtitleItems(concept) {
		const items = []

		if (concept.eventcategory) {
			items.push({
				icon: 'foo',
				text: concept.eventcategory.name
			})
		}

		if (concept.timedescription) {
			items.push({
				icon: 'foo',
				text: concept.timedescription
			})
		}

		if (concept.locationdescription) {
			items.push({
				icon: 'foo',
				text: concept.locationdescription
			})
		}

		return items
	}

	function renderConcepts() {

		return eventconcepts.map(concept => {
			return (
				<React.Fragment key={concept.slug}>
					<BlockSection
						title={concept.name}
						subtitleItems={buildSubtitleItems(concept)}
					>
						<p>
							{concept.shortdescription}
						</p>
					</BlockSection>
					<Divider md />
				</React.Fragment>
			)
		})
	}


	return (
		<Page
			className="ConceptsPage"
			pageTitle="Concepts"
			metaDesc={content.conceptsPageSubtitle}
		>
			<HeaderImage
				image={headerImage}
				alt="Header image"
				navTitle={'Concepts.'}
				mainTitle={content.conceptsPageTitle}
				bodyText={content.conceptsPageSubtitle}
			/>
			<Divider lg />
			{renderConcepts()}
			<Divider lg />
		</Page>
	)
}

const mapStateToProps = (state) => ({
	content: StaticContentSelectors.objectWithKeys([
		KEYS.conceptsPageTitle,
		KEYS.conceptsPageSubtitle,
	])(state),
	loading: ContentSelectors.eventconceptsLoading(state),
	eventconcepts: ContentSelectors.eventconcepts(state),
	headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.conceptsPageHeaderImage)(state)
})

export default connect(mapStateToProps)(ConceptsPage)
