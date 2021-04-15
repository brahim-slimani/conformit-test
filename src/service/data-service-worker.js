/* eslint-disable */
import {comments, employees, events, getEvent, GetEventComments, } from '../../data.js';

class DataServiceWorker {
    
    // GET COMMENTS
    getComments =  comments;

    // GET EVENTS
    getEvents = events;

} export default new DataServiceWorker()
