import * as ActionTypes from './actionTypes';

import PageService from '../../services/pages';
import EventService from '../../services/events';
import EventConceptService from '../../services/eventconcepts';
import TeamMemberService from '../../services/teammembers';
import TestimonialService from '../../services/testimonials';
import SocialMediaService from '../../services/socialmedias';
import KpiService from '../../services/kpis';
import PartnerService from '../../services/partners';
import StoriesService from '../../services/stories';

/**
 * Pages
 */

const setPagesLoading = () => dispatch => dispatch({ type: ActionTypes.SET_PAGES_LOADING });
const setPagesError = () => dispatch => dispatch({ type: ActionTypes.SET_PAGES_ERROR });

export const updatePages = () => dispatch => {
    dispatch(setPagesLoading());
    PageService.getAll()
        .then(pages => {
            dispatch({
                type: ActionTypes.SET_PAGES,
                payload: pages
            });
        })
        .catch(error => {
            console.log('Error in updatePages', error);
            dispatch(setPagesError());
        });
};

/**
 * Events
 */

const setEventsLoading = () => dispatch => dispatch({ type: ActionTypes.SET_EVENTS_LOADING });
const setEventsError = () => dispatch => dispatch({ type: ActionTypes.SET_EVENTS_ERROR });

export const updateEvents = () => dispatch => {
    dispatch(setEventsLoading());
    EventService.getAll()
        .then(events => {
            dispatch({
                type: ActionTypes.SET_EVENTS,
                payload: events
            });
        })
        .catch(error => {
            console.log('Error in updateEvents', error);
            dispatch(setEventsError());
        });
};

/**
 * Event concepts
 */

const setEventConceptsLoading = () => dispatch => dispatch({ type: ActionTypes.SET_EVENT_CONCEPTS_LOADING });
const setEventConceptsError = () => dispatch => dispatch({ type: ActionTypes.SET_EVENT_CONCEPTS_ERROR });

export const updateEventConcepts = () => dispatch => {
    dispatch(setEventConceptsLoading());
    EventConceptService.getAll()
        .then(eventconcepts => {
            dispatch({
                type: ActionTypes.SET_EVENT_CONCEPTS,
                payload: eventconcepts
            });
        })
        .catch(error => {
            console.log('Error in updateEventConcepts', error);
            dispatch(setEventConceptsError());
        });
};

/**
 * Team members
 */

const setTeamMembersLoading = () => dispatch => dispatch({ type: ActionTypes.SET_TEAM_MEMBERS_LOADING });
const setTeamMembersError = () => dispatch => dispatch({ type: ActionTypes.SET_TEAM_MEMBERS_ERROR });

export const updateTeamMembers = () => dispatch => {
    dispatch(setTeamMembersLoading());
    TeamMemberService.getAll()
        .then(teammembers => {
            dispatch({
                type: ActionTypes.SET_TEAM_MEMBERS,
                payload: teammembers
            });
        })
        .catch(error => {
            console.log('Error in updateTeamMembers', error);
            dispatch(setTeamMembersError());
        });
};

/**
 * Testimonials
 */

const setTestimonialsLoading = () => dispatch => dispatch({ type: ActionTypes.SET_TESTIMONIALS_LOADING });
const setTestimonialsError = () => dispatch => dispatch({ type: ActionTypes.SET_TESTIMONIALS_ERROR });

export const updateTestimonials = () => dispatch => {
    dispatch(setTestimonialsLoading());
    TestimonialService.getAll()
        .then(testimonials => {
            dispatch({
                type: ActionTypes.SET_TESTIMONIALS,
                payload: testimonials
            });
        })
        .catch(error => {
            console.log('Error in updateTestimonials', error);
            dispatch(setTestimonialsError());
        });
};

/**
 * Social media links
 */

const setSocialMediasLoading = () => dispatch => dispatch({ type: ActionTypes.SET_SOCIAL_MEDIAS_LOADING });
const setSocialMediasError = () => dispatch => dispatch({ type: ActionTypes.SET_SOCIAL_MEDIAS_ERROR });

export const updateSocialMedias = () => dispatch => {
    dispatch(setSocialMediasLoading());
    SocialMediaService.getAll()
        .then(socialmedias => {
            dispatch({
                type: ActionTypes.SET_SOCIAL_MEDIAS,
                payload: socialmedias
            });
        })
        .catch(error => {
            console.log('Error in updateSocialMedias', error);
            dispatch(setSocialMediasError());
        });
};

/**
 * KPI's
 */

const setKpisLoading = () => dispatch => dispatch({ type: ActionTypes.SET_KPIS_LOADING });
const setKpisError = () => dispatch => dispatch({ type: ActionTypes.SET_KPIS_ERROR });

export const updateKpis = () => dispatch => {
    dispatch(setKpisLoading());
    KpiService.getAll()
        .then(kpis => {
            dispatch({
                type: ActionTypes.SET_KPIS,
                payload: kpis
            });
        })
        .catch(error => {
            console.log('Error in updateKpis', error);
            dispatch(setKpisError());
        });
};

/**
 * Partners
 */

const setPartnersLoading = () => dispatch => dispatch({ type: ActionTypes.SET_PARTNERS_LOADING });
const setPartnersError = () => dispatch => dispatch({ type: ActionTypes.SET_PARTNERS_ERROR });

export const updatePartners = () => dispatch => {
    dispatch(setPartnersLoading())
    PartnerService.getAll()
        .then(partners => {
            dispatch({
                type: ActionTypes.SET_PARTNERS,
                payload: partners
            })
        })
        .catch(error => {
            console.log('Error in updatePartners', error);
            dispatch(setPartnersError())
        })
}

/**
 * News stories
 */

const setStoriesLoading = () => dispatch => dispatch({ type: ActionTypes.SET_STORIES_LOADING });
const setStoriesError = () => dispatch => dispatch({ type: ActionTypes.SET_STORIES_ERROR });

export const updateStories = () => dispatch => {
    dispatch(setStoriesLoading())
    StoriesService.getAll()
        .then(stories => {
            dispatch({
                type: ActionTypes.SET_STORIES,
                payload: stories
            })
        })
        .catch(error => {
            console.log('Error in updateStories', error)
            dispatch(setStoriesError())
        })
}
