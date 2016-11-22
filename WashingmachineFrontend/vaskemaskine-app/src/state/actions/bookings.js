import fetch from 'isomorphic-fetch';
import urls from '../../commons/urls';
import {endCreateBookingFlow} from './createBookingFlow';
import {endEditBookingFlow} from './editBookingFlow';

export const INSERT_BOOKING = 'INSERT_BOOKING';
export function insertBooking(id, startTime, endTime, owner, numberOfWashingMachineUses, numberOfTumbleDryUses) {
    return {
        type: INSERT_BOOKING,
        id,
        startTime,
        endTime,
        owner,
        numberOfWashingMachineUses,
        numberOfTumbleDryUses
    }
}

export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export function removeBooking(id) {
    return {
        type: REMOVE_BOOKING,
        id
    }
}

export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS';
function requestBookings() {
    return {type: REQUEST_BOOKINGS}
}

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
function receiveBookings(bookings) {
    return {
        type: RECEIVE_BOOKINGS,
        bookings
    }
}

export function createBooking(startTime, endTime, numberOfWashingMachineUses, numberOfTumbleDryUses) {
    return function (dispatch) {
        fetch(urls.api.booking, {
            method: 'POST',
            body: `startTime=${startTime}&endTime=${endTime}&numberOfWashingMachineUses=${numberOfWashingMachineUses}&numberOfTumbleDryUses=${numberOfTumbleDryUses}`,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            dispatch(endCreateBookingFlow());
            dispatch(insertBooking(data.id, data.startTime, data.endTime, data.owner, data.numberOfWashingMachineUses, data.numberOfTumbleDryUses));
        });
    }
}

export function editBooking(id, startTime, endTime, numberOfWashingMachineUses, numberOfTumbleDryUses) {
    return function (dispatch) {
        fetch(urls.api.booking, {
            method: 'PUT',
            body: `id=${id}&startTime=${startTime}&endTime=${endTime}&numberOfWashingMachineUses=${numberOfWashingMachineUses}&numberOfTumbleDryUses=${numberOfTumbleDryUses}`,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            dispatch(endEditBookingFlow());
            dispatch(removeBooking(data.id));
            dispatch(insertBooking(data.id, data.startTime, data.endTime, data.owner, data.numberOfWashingMachineUses, data.numberOfTumbleDryUses));
        });
    }
}

export function fetchBookings(startTime, endTime) {
    return function (dispatch) {
        dispatch(requestBookings());

        // If we're logged in, we need more detailed information
        fetch(`${urls.api.booking}/interval?startTime=${startTime}&endTime=${endTime}`, {
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            dispatch(receiveBookings(data));
        });
    }
}

export function deleteBooking(id) {
    return function (dispatch) {
        fetch(urls.api.booking, {
            method: 'DELETE',
            body: `id=${id}`,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            credentials: 'include'
        }).then(function () {
            dispatch(endEditBookingFlow());
            dispatch(removeBooking(id));
        });
    }
}