import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default(ideas = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...ideas, action.payload];
        case UPDATE:
            return ideas.map((idea) => idea._id === action.payload._id? action.payload:idea);
        case DELETE:
            return ideas.filter((idea)=> idea._id !== action.payload );
        
        default:
            return ideas;
    }
}