/* eslint-disable */
import { comments, employees, events, getEvent, GetEventComments, } from '../../data.js';

class DataServiceWorker {

    //GET COMMENTS
    getComments = comments;

    //GET EVENTS
    getEvents = events;

    //GET EMPLOYEES WITH EMBEDED FIELDS
    getEmployees = () => {
        return employees.map((employee) => {
            return { key: employee.id, value: `${employee.firstname} ${employee.lastname} ( ${employee.id} )` };
        });
    }

    //GET UNIQUE EVENT STATUS NAMES
    getEventStatusValues = () => {
        let statusList = events.map((event) => {
            return event.statusName;
        });
        return [...new Set(statusList)];
    }



} export default new DataServiceWorker()
