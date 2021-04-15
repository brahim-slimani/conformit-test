/* eslint-disable */
import {comments, employees, events, getEvent, GetEventComments, } from '../../data.js';

class DataServiceWorker {
    
    // GET COMMENTS
    getComments = () => {
        return comments;
    }
    
} export default new DataServiceWorker()
