import {COST_OF_TUMBLE_DRY_USE, COST_OF_WASHING_MACHINE_USE} from './util'

const strings = {
    frontpageTitle: 'Vaskerumsbooking',
    bookingModal: {
        titleCreate: 'Opret reservation',
        titleEdit: 'Rediger reservation',
        body: 'todo',
        save: 'Opret',
        delete: 'Slet reservation',
        confirmEdit: 'Gem redigering',
        cancel: 'Annuller',
        startTime: 'Starttidspunkt',
        endTime: 'Sluttidspunkt',
        numberOfWashes: `Antal vaskninger (${COST_OF_WASHING_MACHINE_USE} kr)`,
        numberOfTumbleDries: `Antal tørretumblinger (${COST_OF_TUMBLE_DRY_USE} kr)`,
        confirmDeletion: 'Er du sikker på du vil slette reservationen?',
        daysCurrentBookings: 'Nuværende bookinger på dagen',
        noBookingsAsOfYet: 'N/A',
        errorsMessages: {
            mustEndBefore22: 'Reservationen skal slutte senest kl. 22.00',
            mustReserveAtLeast30Minutes: 'Du skal mindst reservere en halv time',
            mustReserveEitherTumbleDrierOrWashingMachine: 'Du skal bestille mindst ét brug af vaskemaskine eller tørretumbler',
            dayIsBeforeToday: 'Du kan ikke reservere bagud i tiden',
            bookingIsClashing: 'Der ligger allerede en reservation i tidsrummet',
            mustBeLoggedIn: 'Du skal være logget ind for at oprette en reservation'
        }
    },
    login: {
        username: 'Brugernavn',
        password: 'Kodeord',
        login: 'Log ind',
        logout: 'Log ud',
        loginFailed: 'Login mislykkedes',
        createUser: 'Opret bruger',
        welcome: 'Hej',
        createUserModal: {
            errorsMessages: {
                passwordCantBeEmpty: 'Dit password kan ikke være tomt',
                usernameCantBeEmpty: 'Dit brugernavn kan ikke være tomt',
                usernameTaken: 'Dit brugernavn er allerede taget',
                nameCantBeEmpty: 'Du skal angive et navn',
                mustChooseApartment: 'Du skal vælge en lejlighed'
            },
            realName: 'Navn',
            apartment: 'Lejlighed'
        }
    },
    misc: {
        globalErrorMessages: {
            error: 'Fejl!'
        },
        currencyShort: 'kr.'
    },
    usage: {
        usage: 'Dit forbrug',
        lastThreeMonths: 'De seneste 3 måneder',
        thisMonth: 'Denne måned'
    }
};

export default strings;