import {combineReducers} from 'redux';
import bookings from './bookings';
import bookingFlow from './createBookingFlow';
import login from './login';
import createUserFlow from './createUserFlow';
import editBookingFlow from './editBookingFlow'
import calendar from './calendar'
import usage from "./usage";

const washingMachineApp = combineReducers({
    bookings,
    bookingFlow,
    login,
    createUserFlow,
    editBookingFlow,
    calendar,
    usage
});

export default washingMachineApp;
