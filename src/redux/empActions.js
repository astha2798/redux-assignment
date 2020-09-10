import { ADD_COMPANY,ADD_EMAIL,ADD_NAME,ADD_LOCATION,FETCH_EMPLOYEES,ADD_EMPLOYEE } from './empTypes'
import axios from 'axios';
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
        type: 'ADD_EMAIL',
        payload: email
    }
}

export const fetchEmployees = () => dispatch => {
    axios.get('http://localhost:5000/employees/')
      .then(employees =>
        dispatch({
          type: FETCH_EMPLOYEES,
          payload: employees.data
        })
      );
  };
  export const addEmployee = postData => dispatch => {
    axios.post('http://localhost:5000/employees/add', postData)
      .then(employee =>
        dispatch({
          type: ADD_EMPLOYEE,
          payload: employee.data
        })
      );
  };