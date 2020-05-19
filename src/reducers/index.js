import {combineReducers} from 'redux'
import redTeacher from './redTeacher';
import redLogin from './redLogin';

const allReducers = combineReducers({
    redTeacher,
    redLogin
})
 
export default allReducers;