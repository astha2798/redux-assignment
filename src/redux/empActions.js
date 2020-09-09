import { ADD_COMPANY,ADD_EMAIL,ADD_NAME,ADD_LOCATION } from './empTypes'
export function addName(name) {
    return {
        type: 'ADD_NAME',
        payload: name
    }
}

export function addLocation(location) {
    return {
        type: 'ADD_LOCATION',
        payload: location
    }
}

export function addCompany(company) {
    return {
        type: 'ADD_COMPANY',
        payload: company
    }
}


export function addEmail(email) {
    return {
        type: 'ADD_Email',
        payload: email
    }
}