import {INSERT_BOOKING, REQUEST_BOOKINGS, RECEIVE_BOOKINGS} from '../actions/bookings';

function bookings(state = {bookings: [], isFetching: false}, action) {
    switch (action.type) {
        case INSERT_BOOKING:
            return Object.assign({}, state, {
                bookings: [
                    ...state.bookings,
                    {
                        id: action.id,
                        startTime: action.startTime,
                        endTime: action.endTime,
                        owner: action.owner,
                        numberOfWashingMachineUses: action.numberOfWashingMachineUses,
                        numberOfTumbleDryUses: action.numberOfTumbleDryUses
                    }
                ]});
        case REQUEST_BOOKINGS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_BOOKINGS:
            return {
                bookings: action.bookings,
                isFetching: false
            };
        default:
            return state;
    }
}

export default bookings;