import React from 'react';
import './App.css';
import CalendarAndUsageContainer from './containers/CalendarAndUsageContainer';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux';
import Header from './components/Header/Header'
import getStore from './state/stores/store'

class App extends React.Component {
    render() {
        const store = getStore();
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Header}>
                        <IndexRoute component={CalendarAndUsageContainer}/>
                        <Route path="/booking(/:year/:month)" component={CalendarAndUsageContainer} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}


export default App;




// TODO giv overblik over dagen når man booker eller redigerer

// TODO s i backenden

// TODO reminder - spørg om de vil have når man booker, evt. default vlrdu i profil
// TODO https
// TODO teting + proptypes
// TODO may have problems with milliseconds if different timezone - kan måske bare bruge UTC til alting...
// TODO might not want to let people delete in all cases....
// TODO admin/kasser panel/forbrug
// TODO vis forbrug evt. for forskellige længder af perioder?
// TODO s i backend
// TODO rev tabel til bookings