import React, { Component, Suspense } from 'react';
import './App.scss';
import './styles/global.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GlobalLifecycle from './GlobalLifecycle';
import LoadingPage from './pages/Loading';
import config from './services/config';

const HomePage = React.lazy(() => import('./pages/Home'));
const ParticipantsPage = React.lazy(() => import('./pages/Participants'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const ConceptsPage = React.lazy(() => import('./pages/Concepts'));
const CalendarPage = React.lazy(() => import('./pages/Calendar'));
const TeamPage = React.lazy(() => import('./pages/Team'));
const ConceptPage = React.lazy(() => import('./pages/Concept'));
const BasicPage = React.lazy(() => import('./pages/BasicPage'));
const VolunteersPage = React.lazy(() => import('./pages/Volunteers'));
const OrganisersPage = React.lazy(() => import('./pages/Organisers'));
const StoryPage = React.lazy(() => import('./pages/Story'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

class App extends Component {

    componentDidMount() {
        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.init(config.FACEBOOK_PIXEL_ID, {}, { autoConfig: true, debug: false });
        } else {
            if (config.IS_DEBUG) {
                console.log('DEBUG: config variable FACEBOOK_PIXEL_ID undefined, not initializing FB pixel analytics');
            }
        }

        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
        } else {
            if (config.IS_DEBUG) {
                console.log('DEBUG: config variable GOOGLE_ANALYTICS_ID undefined, not initializing GA analytics');
            }
        }

        if (config.HOTJAR_ID && config.HOTJAR_SV) {
            hotjar.initialize(config.HOTJAR_ID, config.HOTJAR_SV);
        } else {
            if (config.IS_DEBUG) {
                console.log(
                    'DEBUG: config variable HOTJAR_ID or HOTJAR_SV undefined, not initializing Hotjar analytics'
                );
            }
        }
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <main className="App">
                    <Header />
                    <div className="App--Main">
                        <Suspense fallback={<LoadingPage />}>
                            <Switch>
                                {/* Redirects */}
                                <Redirect path="/privacy" to="/policy" />

                                {/* Static pages */}
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/story" component={StoryPage} />
                                <Route exact path="/participants" component={ParticipantsPage} />
                                <Route exact path="/partners" component={PartnersPage} />
                                <Route exact path="/concepts" component={ConceptsPage} />
                                <Route exact path="/calendar" component={CalendarPage} />
                                <Route exact path="/team" component={TeamPage} />
                                <Route exact path="/volunteers" component={VolunteersPage} />
                                <Route exact path="/organisers" component={OrganisersPage} />

                                {/* Concept pages (JunctionX, HelTech, etc..) */}
                                <Route path="/concepts/:slug" component={ConceptPage} />

                                {/* Other pages */}
                                <Route path="/:slug" component={BasicPage} />

                                <Route path="*" component={NotFoundPage} />
                            </Switch>
                        </Suspense>
                    </div>
                    <Footer />
                    <ScrollToTop />
                    <GlobalLifecycle />
                </main>
            </ConnectedRouter>
        );
    }
}

export default App;
