import { ADD_COMPANY,ADD_EMAIL,ADD_NAME,ADD_LOCATION } from './empTypes'
const initialState = {
    name: '',
    email: '',
    company: '',
    location:''
}

const empReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'ADD_NAME':
            return{
                ...state,
                name: action.payload
            }
        case 'ADD_EMAIL':
            return{
                ...state,
                email: action.payload
            }
        case 'ADD_COMPANY':
            return{
                ...state,
                company: action.payload
            }
        case 'ADD_LOCATION':
            return{
                ...state,
                location: action.payload
            }
        default:
            return state
    }
}
export default empReducer
