/* eslint-disable */
import { employees, events, GetEventComments, } from '../../data.js';

class DataServiceWorker {

    //GET EMPLOYEES WITH EMBEDED FIELDS
    getEmployees = () => {
        return employees.map((employee) => {
            return { key: employee.id, value: `${employee.firstname} ${employee.lastname} ( ${employee.id} )` };
        });
    }

     //GET EVENTS
     getEvents = () => {
        let tempEvents =  events.map((item) => {
            return Object.defineProperty(item, 'comments', {
                value: GetEventComments(item.id),
                writable: true
            });
        });
        return tempEvents;
    }

    //GET UNIQUE EVENT STATUS NAMES
    getEventStatusValues = () => {
        let statusList = events.map((event) => {
            return event.statusName;
        });
        return [...new Set(statusList)];
    }

} export default new DataServiceWorker()
