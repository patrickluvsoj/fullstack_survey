import axios from 'axios';
import { FETCH_USER } from './types';

//passing dispatch function
export const fetchUser = () => async (dispatch) => {
    // only adding relative path (parent will be replace to current path)
    const res = await axios.get('/api/current_user')
    
    dispatch({ type: FETCH_USER, payload: res.data }) 
 }